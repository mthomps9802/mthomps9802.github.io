// pages/Skills.jsx
import SkillCategory from '../../components/SkillCategory';
import jsIcon from '../../assets/javascript_logo.png';
import pyIcon from '../../assets/python_logo.png';
import htmlIcon from "../../assets/html5_logo.png";  
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
    { name: 'Javascript', icon: jsIcon, glowColor: "#F7DF1E" }, 
    { name: 'Python', icon: pyIcon, glowColor: "#3776AB" },          
    { name: 'CSS', icon: cssIcon, glowColor: "#1572B6" },
    { name: 'HTML', icon: htmlIcon, glowColor: "#E34F26" },       
    { name: 'Java', icon: javaIcon, glowColor: "#007396" },     
    { name: 'PHP', icon: phpIcon, glowColor: "#8892BF" },       
    { name: 'Go', icon: goIcon, glowColor: "#00ADD8" },         
    { name: 'SQL', icon: sqlIcon, glowColor: "#003B57" },       
  ];
  

  const Tools = [
    { name: 'Github', icon: githubIcon, glowColor: "#6e5494" },  
    { name: 'Docker', icon: dockerIcon, glowColor: "#0db7ed" },  
    { name: 'AWS', icon: awsIcon, glowColor: "#FF9900" },        
  ];
  

  const Libraries = [
    { name: 'React', icon: reactIcon, glowColor: "#61DAFB" },
    { name: 'Tailwind CSS', icon: tailwindIcon,  glowColor: "#38BDF8" },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-8 pt-28 pb-10">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">Skills</h1>

          <SkillCategory title="Programming Languages" skills={programmingLanguages} />
          <SkillCategory title="Libraries" skills={Libraries} />
          <SkillCategory title="Tools and Technologies" skills={Tools} />
        </div>
      </div>
  
  );
}
