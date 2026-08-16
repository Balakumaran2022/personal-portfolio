import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface Particle3D {
  x: number;
  y: number;
  z: number;
  colorType: number;
  speedX: number;
  speedY: number;
  speedZ: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  // Mouse move listener (updates ref only - no React state re-renders)
  useEffect(() => {
    const initX = window.innerWidth / 2;
    const initY = window.innerHeight / 2;
    mousePositionRef.current = { x: initX, y: initY };

    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 3D Canvas Particle Plexus loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationFrameId: number;
    const particles: Particle3D[] = [];
    const numParticles = 80;
    const fov = 350;
    const maxDepth = 600;
    const minDepth = -150;

    // Initialize particles
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 600,
        y: (Math.random() - 0.5) * 600,
        z: Math.random() * (maxDepth - minDepth) + minDepth,
        colorType: Math.floor(Math.random() * 3),
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        speedZ: (Math.random() - 0.5) * 0.5 - 0.2, // slight forward movement
      });
    }

    // Set canvas dimensions
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.resetTransform();
        ctx.scale(dpr, dpr);
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Eased mouse reference for smooth lag/inertia
    const currentMouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const draw = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);

      ctx.clearRect(0, 0, width, height);

      // Smooth ease mouse coordinates
      currentMouse.x += (mousePositionRef.current.x - currentMouse.x) * 0.05;
      currentMouse.y += (mousePositionRef.current.y - currentMouse.y) * 0.05;

      // Update background blur orbs directly via hardware-accelerated DOM transforms
      if (orb1Ref.current) {
        orb1Ref.current.style.transform = `translate3d(${currentMouse.x}px, ${currentMouse.y}px, 0) translate(-50%, -50%)`;
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.transform = `translate3d(${currentMouse.x + 80}px, ${currentMouse.y + 80}px, 0) translate(-50%, -50%)`;
      }
      if (orb3Ref.current) {
        orb3Ref.current.style.transform = `translate3d(${currentMouse.x - 60}px, ${currentMouse.y - 60}px, 0) translate(-50%, -50%)`;
      }

      // 3D rotations angles per frame (medium speed)
      const angleY = 0.0012; // yaw
      const angleX = 0.0008; // pitch

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      // Update positions
      particles.forEach((p) => {
        // Rotate around Y axis
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;

        // Rotate around X axis
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        p.x = x1 + p.speedX;
        p.y = y2 + p.speedY;
        p.z = z2 + p.speedZ;

        // Wrap around boundary coordinates
        if (p.z < minDepth) p.z = maxDepth;
        if (p.z > maxDepth) p.z = minDepth;
        if (p.x < -400) p.x = 400;
        if (p.x > 400) p.x = -400;
        if (p.y < -400) p.y = 400;
        if (p.y > 400) p.y = -400;
      });

      // Project particles to 2D screen coordinates
      const projected = particles.map((p) => {
        // Z-adjust relative to fov to prevent negative divide
        const zAdjust = p.z + 200;
        const scale = fov / (fov + zAdjust);

        // Interactive mouse camera parallax: closer particles shift more than distant ones
        const mouseParallaxFactor = 0.12 * (1 - zAdjust / (maxDepth + 200));
        const mouseOffsetX = (currentMouse.x - width / 2) * mouseParallaxFactor;
        const mouseOffsetY = (currentMouse.y - height / 2) * mouseParallaxFactor;

        return {
          x: p.x * scale + width / 2 + mouseOffsetX,
          y: p.y * scale + height / 2 + mouseOffsetY,
          scale,
          z: p.z,
          colorType: p.colorType,
        };
      });

      // 1. Draw plexus lines in 3D
      ctx.lineWidth = 0.8;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];

          // Compute screen distance
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Only draw connection if they are close on screen
          if (dist < 130) {
            // Distance fade factor
            const distFade = 1 - dist / 130;
            
            // Depth fade factor (fade items that are too far away)
            const depthFade1 = 1 - (p1.z - minDepth) / (maxDepth - minDepth);
            const depthFade2 = 1 - (p2.z - minDepth) / (maxDepth - minDepth);
            const depthFade = (depthFade1 + depthFade2) / 2;

            const alpha = distFade * depthFade * 0.18;

            if (alpha > 0.01) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              
              if (isDark) {
                ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`; // purple connection
              } else {
                ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`; // indigo connection
              }
              ctx.stroke();
            }
          }
        }
      }

      // 2. Draw particle nodes
      projected.forEach((p) => {
        // Opacity based on depth
        const depthFade = 1 - (p.z - minDepth) / (maxDepth - minDepth);
        const alpha = Math.max(0.1, depthFade * 0.75);
        const size = Math.max(0.5, p.scale * 3);

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);

        let color = "";
        if (isDark) {
          // Dark theme colors: cyan, violet, royal blue
          if (p.colorType === 0) color = `rgba(6, 182, 212, ${alpha})`; // cyan
          else if (p.colorType === 1) color = `rgba(168, 85, 247, ${alpha})`; // purple
          else color = `rgba(59, 130, 246, ${alpha})`; // blue
        } else {
          // Light theme colors: indigo, rose/pink, sky blue
          if (p.colorType === 0) color = `rgba(79, 70, 229, ${alpha})`; // indigo
          else if (p.colorType === 1) color = `rgba(236, 72, 153, ${alpha})`; // pink
          else color = `rgba(2, 132, 199, ${alpha})`; // sky blue
        }

        ctx.fillStyle = color;
        ctx.fill();

        // Add soft glow around closer particles
        if (p.scale > 1.2 && alpha > 0.3) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, size * 2.5, 0, Math.PI * 2);
          if (isDark) {
            ctx.fillStyle = p.colorType === 0 
              ? `rgba(6, 182, 212, ${alpha * 0.15})`
              : `rgba(168, 85, 247, ${alpha * 0.15})`;
          } else {
            ctx.fillStyle = p.colorType === 0 
              ? `rgba(79, 70, 229, ${alpha * 0.12})`
              : `rgba(236, 72, 153, ${alpha * 0.12})`;
          }
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* 3D Canvas Background Overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
      />

      {/* PRIMARY mouse-follow orb — big, vivid, hardware-accelerated via direct transform */}
      <div
        ref={orb1Ref}
        className="absolute rounded-full pointer-events-none will-change-transform"
        style={{
          width: "45vw",
          height: "45vw",
          top: 0,
          left: 0,
          background: isDark
            ? "radial-gradient(circle, hsl(195 100% 50% / 0.16) 0%, transparent 70%)"
            : "radial-gradient(circle, hsl(221 83% 40% / 0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* SECONDARY lagging orb — accent color */}
      <div
        ref={orb2Ref}
        className="absolute rounded-full pointer-events-none will-change-transform"
        style={{
          width: "30vw",
          height: "30vw",
          top: 0,
          left: 0,
          background: isDark
            ? "radial-gradient(circle, hsl(280 100% 65% / 0.14) 0%, transparent 70%)"
            : "radial-gradient(circle, hsl(280 80% 45% / 0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* TERTIARY slow orb */}
      <div
        ref={orb3Ref}
        className="absolute rounded-full pointer-events-none will-change-transform"
        style={{
          width: "20vw",
          height: "20vw",
          top: 0,
          left: 0,
          background: isDark
            ? "radial-gradient(circle, hsl(195 100% 70% / 0.08) 0%, transparent 70%)"
            : "radial-gradient(circle, hsl(221 83% 55% / 0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Floating ambient slow circular-moving background gradients */}
      {[
        { top: "15%", left: "8%", w: "25vw", color: isDark ? "hsl(195 100% 50% / 0.06)" : "hsl(221 83% 40% / 0.04)" },
        { top: "65%", left: "75%", w: "30vw", color: isDark ? "hsl(280 100% 65% / 0.05)" : "hsl(280 80% 45% / 0.04)" },
        { top: "45%", left: "45%", w: "20vw", color: isDark ? "hsl(195 100% 50% / 0.04)" : "hsl(221 83% 40% / 0.03)" },
      ].map((orb, i) => (
        <motion.div
          key={`ambient-${i}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: orb.top,
            left: orb.left,
            width: orb.w,
            height: orb.w,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: "blur(45px)",
          }}
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.5, 0.9, 0.5],
            x: [0, (i === 0 ? 30 : i === 1 ? -40 : 20), 0],
            y: [0, (i === 0 ? -30 : i === 1 ? 20 : -40), 0]
          }}
          transition={{ duration: 12 + i * 3, repeat: Infinity, ease: "easeInOut", delay: i * 2 }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;

