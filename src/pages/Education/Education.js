// pages/Education/Education.js
import React from 'react';
import EducationCard from '../../components/EducationCard';
import { Diamond} from 'lucide-react'

const educationData = [
  {
    title: 'M.S. in Cybersecurity',
    school: 'St. Leo University',
    location: 'Tampa, FL',
    duration: 'Jan 2025 – Jan 2027',
    tags: ['Cloud Security', 'Network Security','Software Security','Database Security', 'Penetration Testing', 'Ethical Hacking', 'Incident Response','Cryptography', 'Vulnerability Assessment'],
  },
  {
    title: 'B.S. in Computer Science',
    school: 'S.U.N.Y Oswego',
    location: 'Oswego, NY',
    duration: 'Aug 2021 – May 2024',
    tags: ['PHP','Docker','DynamoDB','Jupyter','AWS','React','SQL','GitHub','Data Structures & Algorithms','AI/ML', 'Software Engineering','Software Testing', 'Database Design','Software Deployment'],
  },
  {
    title: 'Transferred to SUNY Oswego',
    school: 'Bahamas Technical and Vocational Institute',
    location: 'Nassau, Bahamas',
    duration: 'Jan 2019 – May 2021',
    tags: ['Python', 'HTML', 'CSS', 'Java' ,'JavaScript', 'Web Development'],
  },
];

export default function Education() {
  return (
    <div className="min-h-screen bg-black text-white px-8 pt-28 pb-10">
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h1 className="text-4xl font-bold text-center text-  white mb-10">Education</h1>

        
        <div className="relative pt-8">
          {/* center line */}
          <div
            className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-700 transform -translate-x-1/2"
          />

          {educationData.map((exp, idx) => {
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
                  <EducationCard {...exp} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}