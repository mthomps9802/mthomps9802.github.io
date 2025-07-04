// src/components/ExperienceCard.jsx
import React from 'react'
import { Calendar, Clock } from 'lucide-react'

export default function ExperienceCard({
  icon,
  title,
  company = [],
  duration,
  timeline,
  description,
  tags = [],
}) {
  return (
    <div className="relative bg-black border border-gray-700 rounded-xl p-6 shadow-lg">
      {/* absolutely‐positioned logo in UL corner */}
      <img
        src={icon}
        alt={title}
        className="absolute top-6 left-6 h-10 w-10 object-contain"
      />

      {/* shift all content right by the icon’s width + margin */}
      <div className="ml-16">
        {/* title */}
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>

        {/* company pills */}
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

        {/* dates: calendar, divider, clock */}
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

        {/* description */}
        <p className="text-gray-200 mb-4">{description}</p>

        {/* bottom tags */}
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
  )
}
