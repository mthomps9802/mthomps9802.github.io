import React from 'react';

const ProjectCard = ({ title, description, tags, type, duration, date, icon }) => {
  return (
    <div className="bg-black border border-neutral-800 rounded-xl p-5 w-full max-w-xs text-white">
      <div className="flex justify-between items-start mb-4">
        <img src={icon} alt={title} className="w-10 h-10" />
        <button className="text-neutral-400 hover:text-white">
          <i className="fas fa-link"></i>
        </button>
      </div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <div className="border-t border-neutral-800 pt-2 text-sm text-neutral-400">
        <div className="flex items-center gap-2 mb-1">
          <i className="fas fa-folder"></i>
          <span>{type}</span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <i className="far fa-clock"></i>
          <span>{duration}</span>
        </div>
      </div>
      <p className="text-sm text-neutral-300 mb-4">{description}</p>
      <div className="flex justify-between items-center mb-3 text-xs text-neutral-500">
        <span className="px-3 py-1 rounded-full border border-neutral-700">{date}</span>
        <span className="px-3 py-1 rounded-full border border-neutral-700">now</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span key={idx} className="px-2 py-1 rounded bg-neutral-800 text-xs text-white">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
