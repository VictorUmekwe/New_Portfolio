import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import MovieImg from "../assets/movie-app.png";
import NoteImg from "../assets/Note.png";
import PortfolioImg from "../assets/portfolio.png";

const projects = [
  {
    id: 1,
    title: "Movie-App",
    description:
      "A modern, responsive movie app that fetches data from an API to showcase the latest movies.",
    link: "https://movie-app-psi-weld.vercel.app/",
    image: MovieImg,
  },
  {
    id: 2,
    title: "Note-App",
    description:
      "A fullstack note-taking app built with the MERN stack, Tailwind CSS, and DaisyUI.",
    link: "https://github.com/VictorUmekwe/Note-App",
    image: NoteImg,
  },
  {
    id: 3,
    title: "Portfolio",
    description:
      "A personal portfolio website that showcases my skills and projects, built with Tailwind CSS, React, and Framer Motion.",
    link: "https://new-portfolio-three-eosin.vercel.app/",
    image: PortfolioImg,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-900 text-white flex justify-center items-center py-16 md:py-0"
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Code2 className="inline-block text-indigo-400 mr-2" />
          My Projects
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          className="text-center text-gray-300 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        >
          Here’s a selection of projects I’ve worked on, showcasing my
          experience in building modern, user-friendly web applications.
        </motion.p>

        {/* Project Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ring-1 ring-gray-700 "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-indigo-400 hover:underline transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-500 hover:text-indigo-400 transition-colors duration-300"
                >
                  View Project
                  <ExternalLink className="ml-1 size-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
