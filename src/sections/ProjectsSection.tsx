import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "Portfolio Website",
    description: "A personal portfolio built with Next.js and Tailwind CSS.",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.com",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    name: "Weather App",
    description: "A weather forecast app using React and OpenWeatherMap API.",
    github: "https://github.com/yourusername/weather-app",
    demo: "",
    tech: ["React", "API", "CSS"],
  },
  // Add more projects as needed
];

export default function ProjectsSection() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 min-w-max">
            {projects.map((project) => (
              <div
                key={project.name}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 min-w-[280px] max-w-xs flex-shrink-0 flex flex-col gap-3 border border-gray-200 dark:border-gray-800 transition-transform duration-300 hover:scale-105"
              >
                <h3 className="text-lg font-semibold mb-1">{project.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map((t) => (
                    <span key={t} className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 px-2 py-0.5 rounded text-xs">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
                      <FaGithub />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
