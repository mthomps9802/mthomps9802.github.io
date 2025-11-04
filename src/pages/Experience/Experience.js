import React from 'react';
import ExperienceCard from '../../components/ExperienceCard';
import reactIcon from "../../assets/react_logo.png";
import { Diamond } from 'lucide-react'


const experienceData = [
  {
    title: 'Contracted Web Developer',
    company: ['Self-employed', 'Nassau, Bah', 'Freelance'],
    duration: 'Nov 2024 – Jan 2025',
    timeline: '2 months',
    description:'Created custom client websites with several web development frameworks and languages.',
    tags: ['JS', 'React', 'CSS', 'HTML', 'TypeScript', 'Java'],
    icon: reactIcon,
  },
  {
    title: 'Software Engineer Intern',
    company: ['Chung Real Estate', 'Queens, New York', 'Intership'],
    duration: 'June 2023 – August 2023',
    timeline: '3 months',
    description: 'Led the integration of a Python-focused machine learning model for predicitive analytics.',
    tags: ['Python'],
    icon: reactIcon,
  },
  {
    title: 'Web Developer Intern',
    company: ['OkekeEats', 'Queens, New York', 'Co-op'],
    duration: 'Aug 2022 – August 2022',
    timeline: '4 months',
    description: 'Developed a Python-based campus navigation tool downloaded by more than 300 students and incorporated feedback to improve route accuracy by 20%.',
    tags: ['HTML', 'CSS', 'JS', 'React', 'Node.js', 'GraphQL'],
    icon: reactIcon,
  },
  {
    title: 'Software Engineer Intern',
    company: ['B.T.V.I.', 'Nassau, Bahamas', 'Intership'],
    duration: 'May 2021 – August 2021',
    timeline: '4 months',
    description: 'Developed a Python-based campus navigation tool downloaded by more than 300 students and incorporated feedback to improve route accuracy by 20%.',
    tags: ['NumPy', 'Pandas', 'Python', 'SQLite'],
    icon: reactIcon,
  },
  {
    title: 'Software Developer Intern',
    company: ['B.T.V.I.', 'Nassau, Bah', 'Internship'],
    duration: 'May 2020 – August 2020',
    timeline: '4 months',
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