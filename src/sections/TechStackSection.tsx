import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";

const techs = [
  { icon: FaReact, name: "React" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: FaPython, name: "Python" },
  { icon: FaHtml5, name: "HTML5" },
  { icon: FaCss3Alt, name: "CSS3" },
  { icon: FaGitAlt, name: "Git" },
];

export default function TechStackSection() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Tech Stack</h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 justify-items-center">
          {techs.map(({ icon: Icon, name }) => (
            <div
              key={name}
              className="flex flex-col items-center group cursor-pointer"
            >
              <Icon className="text-5xl text-blue-500 transition-transform duration-200 group-hover:scale-110 group-hover:-rotate-6" />
              <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
