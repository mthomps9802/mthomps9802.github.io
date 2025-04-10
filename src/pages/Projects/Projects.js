// pages/Projects.jsx
import reactIcon from "../../assets/react_logo.png";
/*
import jsIcon from '../../assets/javascript_logo.png';
import pyIcon from '../../assets/python_logo.png';
import htmlIcon from "../../assets/html5_logo.png";  // Replace with actual paths
import cssIcon from "../../assets/css3_logo.png";
import awsIcon from "../../assets/aws_logo.png";
import dockerIcon from "../../assets/docker_logo.png";
import phpIcon from "../../assets/php_logo.png";
import goIcon from "../../assets/golang_logo.png";
import sqlIcon from "../../assets/sql_logo.png";
import githubIcon from "../../assets/github_logo.png";
import javaIcon from "../../assets/java_logo.png";
import tailwindIcon from "../../assets/tailwind_logo.png";
*/
import ProjectCard from '../../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'React Portfolio',
      description: 'A Vercel-like developer portfolio website template made with React and Tailwind.',
      tags: ['React', 'Tailwind', 'Javascript'],
      type: 'Website Template',
      duration: 'Placeholder',
      date: 'Placeholder',
      icon: reactIcon,
    }
    ,
    // Add more projects as needed
    {
      title: 'React Portfolio',
      description:
        'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
      tags: ['React', 'Tailwind', 'Javascript'],
      type: 'Website Template',
      duration: 'Placeholder',
      date: 'Placeholder',
      icon: reactIcon,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 pt-28 pb-10">
      <h1 className="text-4xl font-bold text-center mb-10">Projects</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};
