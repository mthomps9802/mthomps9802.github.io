// components/EducationCard.js
import React from 'react'
import { MapPin, Clock, GraduationCapIcon } from 'lucide-react'

const EducationCard = ({ title, school, location, duration, tags }) => {
  return (
    <div className="bg-black border border-zinc-800 rounded-lg shadow-md w-full max-w-2xl overflow-hidden">
      {/* Header: logo + title + school */}
      <div className="flex items-center gap-4 p-6">
        <GraduationCapIcon className="w-12 h-12 text-zinc-400 flex-shrink-0" />
        <div>
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          <p className="text-sm text-zinc-400">{school}</p>
        </div>
      </div>

      {/* ─────────── Border above location & duration ─────────── */}
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
            className="text-sm text-white bg-transparent border border-zinc-700 px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default EducationCard
