// components/SkillCard.jsx
export default function SkillCard({ name, icon }) {
    return (
      <div className="flex items-center justify-between bg-[#111] border border-gray-700 p-4 rounded-xl w-full md:w-[300px] shadow-inner">
        <span className="text-white font-medium">{name}</span>
        <img src={icon} alt={`${name} logo`} className="w-10 h-10 opacity-25" />
      </div>
    );
  }
  