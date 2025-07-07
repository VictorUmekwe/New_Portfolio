import { Laptop, Menu, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const styles = {
  link: "text-sm hover:text-gray-100 hover:bg-indigo-500 py-1 px-2 rounded-lg transition-colors duration-700",
  button:
    "py-3 px-6 bg-indigo-600 text-white rounded-lg block hover:bg-indigo-500 hover:scale-105 transition transform duration-300",
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="p-3 text-white relative">
      <div className="container flex items-center justify-between mx-auto">
        <HashLink
          to="/#home"
          className="flex items-center text-indigo-600 text-xl font-bold md:text-2xl"
        >
          <Laptop className="mr-1 size-10 text-indigo-600" />
          <span className="font-semibold tracking-tight">VikkyCodez</span>
        </HashLink>

        {/* Large screen navbar */}
        <ul className="hidden md:flex items-center space-x-6 text-lg font-medium">
          <li>
            <a href="#projects" className={styles.link}>Projects</a>
          </li>
          <li>
            <a href="#about" className={styles.link}>About Me</a>
          </li>
          <li>
            <a href="#services" className={styles.link}>Services</a>
          </li>
          <li>
            <a href="#contact" className={styles.button}>Contact</a>
          </li>
        </ul>

        {/* Menu toggle button for small screens */}
        <div
          className="cursor-pointer md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="text-indigo-600 size-8" />
          ) : (
            <Menu className="text-indigo-600 size-8" />
          )}
        </div>
      </div>

      {/* Small screen navbar with Framer Motion slide-in animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="
              fixed top-0 right-0 h-full w-3/4 bg-indigo-700 text-white flex flex-col pt-10
              md:hidden z-50
            "
          >
            {/* Close icon inside the mobile menu */}
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={toggleMenu}
            >
              <X className="size-8 text-white" />
            </div>

            <ul className="flex flex-col items-center space-y-6 text-lg font-medium mt-10">
              <li>
                <a
                  href="#projects"
                  className={styles.link}
                  onClick={toggleMenu}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={styles.link}
                  onClick={toggleMenu}
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className={styles.link}
                  onClick={toggleMenu}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={styles.button}
                  onClick={toggleMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
