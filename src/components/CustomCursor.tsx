import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
}

const CustomCursor = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Mouse positions (raw client coordinates)
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const trail = useRef({ x: 0, y: 0 });
  
  // Velocity and Tilt
  const velocity = useRef({ x: 0, y: 0 });
  const currentTilt = useRef({ x: 0, y: 0 });

  // List of active trail particles
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    // 1. Mouse move listener to update target coordinate
    const handleMouseMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      setIsVisible(true);
    };

    // 2. Click states
    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    // 3. Visibility states (hide cursor when mouse leaves window)
    const handleMouseLeaveDoc = () => setIsVisible(false);
    const handleMouseEnterDoc = () => setIsVisible(true);

    // 4. Hover detection via event delegation
    const handleMouseOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (!el) return;

      const interactive =
        el.tagName === "A" ||
        el.tagName === "BUTTON" ||
        el.tagName === "INPUT" ||
        el.tagName === "TEXTAREA" ||
        el.tagName === "SELECT" ||
        el.closest("a") ||
        el.closest("button") ||
        el.closest(".hover-target") ||
        el.getAttribute("role") === "button";

      setIsHovered(!!interactive);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeaveDoc);
    document.addEventListener("mouseenter", handleMouseEnterDoc);
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    // Handle canvas sizing
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    window.addEventListener("resize", handleResize);

    // Initial position centering
    target.current.x = window.innerWidth / 2;
    target.current.y = window.innerHeight / 2;
    current.current.x = target.current.x;
    current.current.y = target.current.y;
    trail.current.x = target.current.x;
    trail.current.y = target.current.y;

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeaveDoc);
      document.removeEventListener("mouseenter", handleMouseEnterDoc);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Animation Loop (High Performance direct style manipulations to avoid React redraw overhead)
  useEffect(() => {
    let animationFrameId: number;

    const getRandomColor = () => {
      if (isDark) {
        // Neon palette matching user reference: Red, Cyan, Indigo/Purple, Pink, Gold
        const colors = ["#ef4444", "#06b6d4", "#a855f7", "#ec4899", "#f59e0b"];
        return colors[Math.floor(Math.random() * colors.length)];
      } else {
        // Soft glowing light palette: Indigo, Royal Blue, Pink, Sky Blue
        const colors = ["#6366f1", "#2563eb", "#db2777", "#0284c7"];
        return colors[Math.floor(Math.random() * colors.length)];
      }
    };

    const update = () => {
      // 1. Smooth cursor trailing positions
      // Main pointer follows mouse target quickly
      current.current.x += (target.current.x - current.current.x) * 0.75;
      current.current.y += (target.current.y - current.current.y) * 0.75;

      // Secondary trail circle lagging behind
      trail.current.x += (target.current.x - trail.current.x) * 0.18;
      trail.current.y += (target.current.y - trail.current.y) * 0.18;

      // 2. Velocity calculation
      const dx = target.current.x - current.current.x;
      const dy = target.current.y - current.current.y;
      velocity.current.x += (dx - velocity.current.x) * 0.1;
      velocity.current.y += (dy - velocity.current.y) * 0.1;

      // 3. 3D flight-like tilt logic
      // Pitch/Yaw tilts based on velocity (cap at 25 degrees)
      const pitch = Math.max(-25, Math.min(25, -velocity.current.y * 0.8));
      const yaw = Math.max(-25, Math.min(25, velocity.current.x * 0.8));
      
      // Decay tilt slowly if mouse stops moving
      currentTilt.current.x += (pitch - currentTilt.current.x) * 0.15;
      currentTilt.current.y += (yaw - currentTilt.current.y) * 0.15;

      // 4. Update main pointer styles
      if (cursorRef.current) {
        const x = current.current.x;
        const y = current.current.y;
        const tiltX = currentTilt.current.x;
        const tiltY = currentTilt.current.y;
        const scale = isClicked ? 0.88 : isHovered ? 1.15 : 1.0;
        
        // Translate to mouse position, rotate 3D, and apply scaling
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${scale})`;
        cursorRef.current.style.opacity = isVisible ? "1" : "0";
      }

      // 5. Update lagging outer trail halo styles
      if (trailRef.current) {
        const tx = trail.current.x;
        const ty = trail.current.y;
        const scale = isHovered ? 1.6 : 1.0;
        trailRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 0) translate(-50%, -50%) scale(${scale})`;
        trailRef.current.style.opacity = isVisible ? "0.6" : "0";
      }

      // 6. Spawn particles in 3D-like trail
      const speed = Math.sqrt(dx * dx + dy * dy);
      if (speed > 1.5 && isVisible && Math.random() < 0.35) {
        particles.current.push({
          x: target.current.x,
          y: target.current.y,
          vx: (Math.random() - 0.5) * 1.5 - velocity.current.x * 0.08,
          vy: (Math.random() - 0.5) * 1.5 - velocity.current.y * 0.08,
          size: Math.random() * 3.5 + 1.5,
          color: getRandomColor(),
          alpha: 1.0,
          decay: Math.random() * 0.02 + 0.02
        });
      }

      // 7. Draw trail particles on overlay canvas
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          particles.current.forEach((p, idx) => {
            p.x += p.vx;
            p.y += p.vy;
            p.alpha -= p.decay;
            p.size *= 0.97; // shrink slightly
            
            if (p.alpha > 0) {
              ctx.save();
              ctx.globalAlpha = p.alpha;
              ctx.beginPath();
              ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
              
              // Shadow/Glow effect on particle nodes
              ctx.shadowBlur = 6;
              ctx.shadowColor = p.color;
              ctx.fillStyle = p.color;
              ctx.fill();
              ctx.restore();
            }
          });

          // Filter out expired particles
          particles.current = particles.current.filter((p) => p.alpha > 0);
        }
      }

      animationFrameId = requestAnimationFrame(update);
    };

    update();

    return () => cancelAnimationFrame(animationFrameId);
  }, [isDark, isClicked, isHovered, isVisible]);

  return (
    <>
      {/* Background Canvas for Particle Stream */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-[9997]"
        style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.3s ease" }}
      />

      {/* Main Gaming Cursor Pointer Container */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform transition-opacity duration-300"
        style={{
          width: "48px",
          height: "48px",
          // Offset slightly so the SVG hot-spot (0,0) is directly under the mouse pointer
          marginLeft: "-4px",
          marginTop: "-4px",
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        {isDark ? (
          /* DARK MODE CURSOR: Metallic arrow body with glowing rainbow borders (from image center) */
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ filter: "drop-shadow(0px 0px 8px rgba(168, 85, 247, 0.65))" }}
          >
            <defs>
              {/* Left half shading: slightly lighter dark metal */}
              <linearGradient id="metal-left" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2c2d3a" />
                <stop offset="100%" stopColor="#13141c" />
              </linearGradient>
              
              {/* Right half shading: darker metal for 3D depth */}
              <linearGradient id="metal-right" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e1f26" />
                <stop offset="100%" stopColor="#08090d" />
              </linearGradient>

              {/* Glowing Rainbow Border Gradient (Orange-Red-Pink-Purple-Cyan-Green) */}
              <linearGradient id="rainbow-border" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="20%" stopColor="#ef4444" />
                <stop offset="40%" stopColor="#ec4899" />
                <stop offset="60%" stopColor="#8b5cf6" />
                <stop offset="80%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>

            {/* Pointer Shaded Shapes */}
            {/* Left side polygon */}
            <polygon points="2,2 14,18 6,26 2,2" fill="url(#metal-left)" />
            {/* Right side polygon */}
            <polygon points="2,2 24,16 14,18 2,2" fill="url(#metal-right)" />

            {/* Glowing neon rainbow outline */}
            <polygon
              points="2,2 24,16 14,18 6,26 2,2"
              stroke="url(#rainbow-border)"
              strokeWidth="2.5"
              strokeLinejoin="miter"
            />
            
            {/* Inner division line that glows yellow/orange for 3D ridge line */}
            <line x1="2" y1="2" x2="14" y2="18" stroke="#f59e0b" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        ) : (
          /* LIGHT MODE CURSOR: White/silver aerodynamic stealth jet with indigo borders */
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ filter: "drop-shadow(0px 0px 6px rgba(99, 102, 241, 0.45))" }}
          >
            <defs>
              {/* Left side: white silver */}
              <linearGradient id="silver-left" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#e2e8f0" />
              </linearGradient>
              
              {/* Right side: slightly shaded silver */}
              <linearGradient id="silver-right" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f1f5f9" />
                <stop offset="100%" stopColor="#cbd5e1" />
              </linearGradient>
            </defs>

            {/* Swept-back aerodynamic wings pointer */}
            <polygon points="2,2 14,18 12,28 2,2" fill="url(#silver-left)" />
            <polygon points="2,2 28,12 14,18 2,2" fill="url(#silver-right)" />

            {/* Deep indigo border outline */}
            <polygon
              points="2,2 28,12 14,18 12,28 2,2"
              stroke="#1e1b4b"
              strokeWidth="2"
              strokeLinejoin="miter"
            />
            {/* Soft cyan inner division line */}
            <line x1="2" y1="2" x2="14" y2="18" stroke="#06b6d4" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        )}
      </div>

      {/* Lagging outer halo ring */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] will-change-transform transition-all"
        style={{
          width: isHovered ? "36px" : "18px",
          height: isHovered ? "36px" : "18px",
          border: isDark 
            ? "1.5px solid rgba(6, 182, 212, 0.65)" 
            : "1.5px solid rgba(79, 70, 229, 0.65)",
          boxShadow: isDark
            ? "0 0 12px rgba(6, 182, 212, 0.45)"
            : "0 0 8px rgba(79, 70, 229, 0.35)",
          background: isDark
            ? "radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 80%)"
            : "radial-gradient(circle, rgba(79, 70, 229, 0.08) 0%, transparent 80%)",
          transition: "width 0.2s cubic-bezier(0.25, 1, 0.5, 1), height 0.2s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s ease",
          transform: "translate3d(0, 0, 0) translate(-50%, -50%)",
        }}
      />
    </>
  );
};

export default CustomCursor;
