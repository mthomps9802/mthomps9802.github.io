import SkillCard from './SkillCard';

export default function SkillCategory({ title, skills }) {
  return (
    <div className="mb-12">
      <h2 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-1">{title}</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {skills.map((skill, idx) => (
          <div key={idx} className="transition-transform hover:scale-[1.02]">
            <SkillCard {...skill} />
            <style>{`
              .hover\\:glow-${idx}:hover {
                box-shadow: 0 0 12px 2px ${skill.glowColor || 'transparent'};
              }
            `}</style>
          </div>
        ))}
      </div>
    </div>
  );
}
