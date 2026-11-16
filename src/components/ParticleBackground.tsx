import { useTheme } from "next-themes";

const ParticleBackground = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Modern High-Performance Tech Grid Background (0% CPU, no paint thrashing) */}
      <div 
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Primary Top Radial Glow */}
      <div 
        className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[650px] h-[450px] md:w-[1000px] md:h-[550px] rounded-full pointer-events-none"
        style={{
          background: isDark
            ? "radial-gradient(circle, hsl(195 100% 50% / 0.12) 0%, transparent 70%)"
            : "radial-gradient(circle, hsl(221 83% 53% / 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Secondary Accent Glow (Bottom Right) */}
      <div 
        className="absolute top-[45%] -right-[10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: isDark
            ? "radial-gradient(circle, hsl(280 100% 65% / 0.08) 0%, transparent 70%)"
            : "radial-gradient(circle, hsl(280 80% 50% / 0.05) 0%, transparent 70%)",
        }}
      />

      {/* Subtle Cyan Bottom Left Accent Glow */}
      <div 
        className="absolute -bottom-[10%] -left-[10%] w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{
          background: isDark
            ? "radial-gradient(circle, hsl(195 100% 50% / 0.06) 0%, transparent 70%)"
            : "radial-gradient(circle, hsl(221 83% 53% / 0.04) 0%, transparent 70%)",
        }}
      />
    </div>
  );
};

export default ParticleBackground;
