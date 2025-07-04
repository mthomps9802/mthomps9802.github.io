import { useState } from 'react';

export default function SkillCard({ name, icon, glowColor }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-center justify-between bg-[#000000] border border-gray-700 p-4 rounded-xl w-full shadow-inner transition-all duration-300"
      style={{
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: isHovered && glowColor
          ? `0 0 12px 4px ${glowColor}`
          : 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="text-white font-medium">{name}</span>
      <img
        src={icon}
        alt={`${name} logo`}
        className="w-10 h-10 opacity-25"
      />
    </div>
  );
}
