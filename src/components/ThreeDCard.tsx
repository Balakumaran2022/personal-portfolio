import React from "react";

interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export const ThreeDCard = ({ children, className = "" }: ThreeDCardProps) => {
  return (
    <div className={`h-full w-full ${className}`}>
      {children}
    </div>
  );
};

export default ThreeDCard;
