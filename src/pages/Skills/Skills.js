// pages/Skills.jsx
import SkillCategory from '../../components/SkillCategory';
import jsIcon from '../../assets/javascript_logo.png';
import pyIcon from '../../assets/python_logo.png';
import htmlIcon from "../../assets/html5_logo.png";  // Replace with actual paths
import cssIcon from "../../assets/css3_logo.png";
import reactIcon from "../../assets/react_logo.png";
import awsIcon from "../../assets/aws_logo.png";
import dockerIcon from "../../assets/docker_logo.png";
import phpIcon from "../../assets/php_logo.png";
import goIcon from "../../assets/golang_logo.png";
import sqlIcon from "../../assets/sql_logo.png";
import githubIcon from "../../assets/github_logo.png";
import javaIcon from "../../assets/java_logo.png";
import tailwindIcon from "../../assets/tailwind_logo.png";

export default function Skills() {
  const programmingLanguages = [
    { name: 'Javascript', icon: jsIcon },
    { name: 'Python', icon: pyIcon },
    { name: 'HTML', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'Java', icon: javaIcon },
    { name: 'PHP', icon: phpIcon },
    { name: 'Go', icon: goIcon },
    { name: 'SQL', icon: sqlIcon },
    // add more...
  ];

  const Tools = [
    { name: 'Github', icon:githubIcon },
    { name: 'Docker', icon: dockerIcon },
    { name: 'AWS', icon: awsIcon },
    // add more...
  ];

  const Libraries = [
    { name: 'React', icon: reactIcon },
    { name: 'Tailwind CSS', icon: tailwindIcon },
    // add more...
  ];

  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mt-8 mb-6">Skills</h1>

          <SkillCategory title="Programming Languages" skills={programmingLanguages} />
          <SkillCategory title="Libraries" skills={Libraries} />
          <SkillCategory title="Tools and Technologies" skills={Tools} />
        </div>
      </div>
  
  );
}
