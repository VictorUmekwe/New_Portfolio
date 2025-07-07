import { GraduationCap, Code2, Info } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center py-16 md:py-0"
    >
      <motion.div
        className="max-w-4xl mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-400">
          <Info className="inline-block text-indigo-400 mr-2"/>
          About Me
        </h2>
        <p className="text-gray-300 mb-8 text-lg leading-relaxed">
          I’m a passionate Fullstack Web Developer who loves turning ideas into
          digital experiences. With a keen eye for detail and a drive for
          continuous learning, I specialize in crafting efficient, scalable, and
          visually appealing web applications that make a real difference.
        </p>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8 text-left">
          {/* Education Section */}
          <motion.div
            className="flex-1 bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-indigo-500/40 transition-shadow duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <GraduationCap className="text-indigo-400 size-6 mr-2" />
              <h3 className="text-xl font-semibold text-indigo-300">
                Education
              </h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li>
                <span className="font-semibold text-white">
                  ND. Accounting
                </span>{" "}
                - Abia State Polytechnic (2007 - 2009)
              </li>
              <li>
                <span className="font-semibold text-white">
                  HND. Accounting
                </span>{" "}
                - Lagos State Polytechnic (2011 - 2013)
              </li>
              <li>
                <span className="font-semibold text-white">
                  Fullstack Web Development
                </span>{" "}
                - Techstudio Academy (2024)
              </li>
            </ul>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className="flex-1 bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-indigo-500/40 transition-shadow duration-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <Code2 className="text-indigo-400 size-6 mr-2" />
              <h3 className="text-xl font-semibold text-indigo-300">Skills</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li>JavaScript, TypeScript, React.js</li>
              <li>Node.js, Express.js, MongoDB</li>
              <li>Tailwind CSS, Bootstrap, Framer Motion</li>
              <li>RESTful APIs, redux toolkit, JWT Authentication</li>
              <li>Responsive Design & Accessibility</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
