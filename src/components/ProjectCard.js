import React from 'react';

const ProjectCard = ({ title, description, tags, type, duration, date, icon, progress }) => {
  return (
    <div className="bg-black border border-neutral-800 rounded-xl p-5 w-full max-w-xs min-h-[440px] flex flex-col justify-between text-white transition duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:border-neutral-500">
      {/* Top Section */}
      <div>
        <div className="flex justify-between items-start mb-4">
          <img src={icon} alt={title} className="w-10 h-10" />
          <button className="text-neutral-400 hover:text-white">
            <i className="fas fa-link"></i>
          </button>
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>

        {/* First Separator Line */}
        <hr className="border-neutral-800 mb-2" />

        <div className="text-sm text-neutral-400 space-y-1">
          <div className="flex items-center gap-2">
            <i className="fas fa-folder"></i>
            <span>{type}</span>
          </div>
          <hr className="border-neutral-800 mt-3 mb-3" />
          <div className="flex items-center gap-2">
            <i className="far fa-clock"></i>
            <span>{duration}</span>
          </div>
        </div>

        {/* Second Separator Line */}
        <hr className="border-neutral-800 mt-3 mb-3" />

        {/* Spaced Description */}
        <p className="text-sm text-neutral-300 pt-2 mb-4">{description}</p>
      </div>

      {/* Bottom Section */}
      <div>
        <div className="flex justify-between items-center mb-3 text-xs text-neutral-500">
          <span className="px-3 py-1 rounded-full border border-neutral-700">{date}</span>
          <span className="px-3 py-1 rounded-full border border-neutral-700">{progress}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span key={idx} className="px-2 py-1 rounded bg-neutral-800 text-xs text-white">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
