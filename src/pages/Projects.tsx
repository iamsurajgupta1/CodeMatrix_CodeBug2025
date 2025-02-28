import { useContext } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  year: number;
  tags: string[];
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Build Complete LMS Website",
    description: "Full-featured learning management system with authentication, course creation, and student management",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    year: 2025,
    tags: ["React", "Node.js", "MongoDB"],
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Modern Portfolio Site",
    description: "Next.js 15 powered portfolio with dynamic content and animations",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    year: 2025,
    tags: ["Next.js", "Tailwind", "TypeScript"],
    category: "React.js"
  },
  {
    id: 3,
    title: "Responsive Real-Estate Website",
    description: "Dynamic property listing platform with search and filtering",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    year: 2025,
    tags: ["React", "Firebase"],
    category: "React.js"
  },
  {
    id: 4,
    title: "E-Commerce Dashboard",
    description: "Complete admin dashboard for managing online store",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    year: 2024,
    tags: ["React", "Redux", "Node.js"],
    category: "Full Stack"
  },
  {
    id: 5,
    title: "JavaScript Game Engine",
    description: "2D game engine built with pure JavaScript",
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=800&q=80",
    year: 2024,
    tags: ["JavaScript", "Canvas API"],
    category: "JavaScript"
  },
  {
    id: 6,
    title: "Responsive Portfolio Template",
    description: "Clean and modern portfolio template",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
    year: 2024,
    tags: ["HTML", "CSS", "JavaScript"],
    category: "HTML/CSS"
  }
];

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-[#1a1d27] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center mb-3">
              <span className="px-3 py-1 bg-[#2a2d37] text-white rounded-full text-sm">
                {project.year}
              </span>
              <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm">
                {project.category}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#2a2d37] text-white rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}