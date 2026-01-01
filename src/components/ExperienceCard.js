import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

export default function ExperienceCard({
  icon,
  title,
  company = [],
  duration,
  timeline,
  description,
  tags = [],
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.3}
      glareBorderRadius="12px"
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      scale={1.03}
      transitionSpeed={2000}
      className="rounded-xl"
    >
      <div
        className="relative bg-black border border-gray-700 rounded-xl p-6 shadow-lg overflow-hidden"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Dynamic cursor glow */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, rgba(0,212,255,0.25), transparent 80%)`,
          }}
        />

        {/* Card content */}
        <img
          src={icon}
          alt={title}
          className="absolute top-6 left-6 h-10 w-10 object-contain"
        />

        <div className="ml-16 relative z-10">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>

          <div className="flex flex-wrap gap-2 mb-4">
            {company.map((c, i) => (
              <span
                key={i}
                className="text-sm text-gray-300 bg-black px-2 py-1 rounded-full border border-gray-600"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="text-gray-300 text-sm space-y-2 mb-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-gray-400" />
              <span>{duration}</span>
            </div>
            <div className="border-t border-gray-700" />
            <div className="flex items-center pt-2">
              <Clock className="w-4 h-4 mr-2 text-gray-400" />
              <span>{timeline}</span>
            </div>
          </div>

          <p className="text-gray-200 mb-4">{description}</p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-sm text-gray-300 bg-black px-2 py-1 rounded-full border border-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Tilt>
  );
}
