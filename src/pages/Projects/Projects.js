import React, { useState } from 'react';
import reactIcon from "../../assets/react_logo.png";
import pythonIcon from "../../assets/python_logo.png";  
// Add other imports as needed (e.g., tailwindIcon, etc.)
import ProjectCard from '../../components/ProjectCard';


export default function Projects() {
  const [activeTag, setActiveTag] = useState(null);

  const allTags = ['React', 'Tailwind', 'Javascript', 'CSS', 'HTML', 'Python', 'PHP'];

  const projects = [
    {
      title: 'React Portfolio',
      description: `A Vercel-like developer portfolio website
       template made with React and Tailwind
        to display projects, skills, and experience.`,
      tags: ['React', 'Tailwind', 'Javascript', 'HTML'],
      type: 'Webfolio Page',
      date: 'May 2025',
      icon: reactIcon,
      progress: 'In Progress'
    },
    {
      title: 'Sunset Finder',
      description: `Captured real-time sunset images
       from our four live-stream cameras
        and classified them by season
         and date through an SVM algorithm
          with 78% accuracy.`,
      tags: ['Python', 'HTML', 'PHP', 'CSS', 'Javascript'],
      type: 'Sunset Detection System',
      date: 'May 2023',
      icon: pythonIcon,
      progress: 'Completed'
    },
    {
      title: 'Yelp Business Recommender',
      description: `Built a Python recommendation engine on 6 million plus
       Yelp businesses using extensible hash tables and TF-IDF
        to boost relevance by 30%.
         Wrapped it in an intuitive Flask + HTML/CSS/JS UI.`,
      tags: ['Python', 'HTML', 'CSS', 'JS'],
      type: 'Business Recommender',
      date: 'Nov 2023',
      icon: pythonIcon,
      progress: 'Completed'
    }
  ];

  const filteredProjects = activeTag
    ? projects.filter(project => project.tags.includes(activeTag))
    : projects;

  return (
    <div className="min-h-screen bg-black text-white px-8 pt-28 pb-10">
      <h1 className="text-4xl font-bold text-center mb-10">Projects</h1>

      {/* Tag Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            className={`px-4 py-1 rounded-full border text-sm transition-all ${
              activeTag === tag
                ? 'bg-white text-black border-white'
                : 'bg-neutral-900 text-white border-neutral-700 hover:bg-neutral-800'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="flex flex-wrap gap-6 justify-center">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
