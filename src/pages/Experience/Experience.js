import React from 'react';
import ExperienceCard from '../../components/ExperienceCard';
import reactIcon from "../../assets/react_logo.png";
import { Diamond } from 'lucide-react'


const experienceData = [
  {
    title: 'Freelancer',
    company: ['Self-employed', 'Nassau, Bah', 'Freelance'],
    duration: 'June 2024 – August 2024',
    timeline: '3 months',
    description:'Created custom client websites with React, Java, CSS and HTML. Notably built and deployed a professional site for Coach Jason Mitch.',
    tags: ['JS', 'React', 'CSS', 'HTML'],
    icon: reactIcon,
  },
  {
    title: 'Btvi Engineer Intern',
    company: ['B.T.V.I.', 'Nassau, Bahamas', 'Software Engineer Intern'],
    duration: 'May 2021 – August 2021',
    timeline: '1 day',
    description: 'Built a Python-based campus navigation tool using NumPy & Pandas.',
    tags: ['NumPy', 'Pandas', 'Python', 'SQLite'],
    icon: reactIcon,
  },
  {
    title: 'Btvi Developer Intern',
    company: ['B.T.V.I.', 'Nassau, Bah', 'Software Developer Intern'],
    duration: 'May 2020 – August 2020',
    timeline: '1 day',
    description: 'Collaborated with 5 cross-functional teams to overhaul the website UI—designing HTML/CSS/JS wireframes and implementing changes.',
    tags: ['HTML', 'CSS', 'JS'],
    icon: reactIcon,
  },
]

export default function Experience() {
  return (
    <div className="min-h-screen bg-black text-white px-8 pt-28 pb-10">
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h1 className="text-4xl font-bold text-center text-  white mb-10">Experience</h1>

        
        <div className="relative pt-8">
          {/* center line */}
          <div
            className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-700 transform -translate-x-1/2"
          />

          {experienceData.map((exp, idx) => {
            const isLeft = idx % 2 === 0

            return (
              // full-width relative container
              <div key={exp.title} className="relative mb-10 w-full">
                {/* white dot, centered on the line */}
                <Diamond
                  className="
                    absolute
                    top-40
                    left-1/2
                    -translate-x-1/2
                    h-4 w-4
                    fill-current
                    text-white
                  "
                />
                

                {/* card pushed left or right */}
                <div
                  className={`
                    w-full md:w-1/2
                    ${isLeft
                      ? 'md:pr-8 md:mr-auto'
                      : 'md:pl-8 md:ml-auto'
                    }
                  `}
                >
                  <ExperienceCard {...exp} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}