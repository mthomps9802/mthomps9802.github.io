// components/SkillCategory.jsx
import SkillCard from './SkillCard';

export default function SkillCategory({ title, skills }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-gray-400 font-medium">{title}</h3>
        <div className="flex-grow border-b border-gray-700"></div>
      </div>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
}
