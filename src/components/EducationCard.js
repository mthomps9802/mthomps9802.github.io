// components/EducationCard.jsx
import React, { useState } from 'react'
import Tilt from 'react-parallax-tilt'
import { MapPin, Clock, GraduationCapIcon } from 'lucide-react'

const EducationCard = ({ title, school, location, duration, tags }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  return (
    <Tilt
      glareEnable
      glareMaxOpacity={0.25}
      glareBorderRadius="12px"
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      scale={1.03}
      transitionSpeed={2000}
      className="rounded-xl"
    >
      <div
        className="relative bg-black border border-zinc-800 rounded-xl shadow-lg overflow-hidden"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Cursor-follow glow */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            background: `radial-gradient(
              400px circle at ${pos.x}px ${pos.y}px,
              rgba(0,212,255,0.25),
              transparent 80%
            )`,
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center gap-4 p-6">
            <GraduationCapIcon className="w-12 h-12 text-zinc-400 flex-shrink-0" />
            <div>
              <h2 className="text-lg font-semibold text-white">{title}</h2>
              <p className="text-sm text-zinc-400">{school}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-800 px-6 pt-4 pb-2">
            <p className="flex items-center text-sm text-zinc-300 mb-2">
              <MapPin className="w-4 h-4 text-zinc-400 mr-2" />
              {location}
            </p>
            <p className="flex items-center text-sm text-zinc-300">
              <Clock className="w-4 h-4 text-zinc-400 mr-2" />
              {duration}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 px-6 pb-6 pt-4">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-sm text-white border border-zinc-700 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Tilt>
  )
}

export default EducationCard
