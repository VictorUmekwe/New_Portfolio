import { Laptop, Github, Linkedin, Twitter } from "lucide-react";
import { HashLink } from 'react-router-hash-link'

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white py-8 mt-12 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo/Branding */}
        <div className="flex items-center space-x-2">
          <Laptop className="text-indigo-400 size-8" />
          <span className="text-xl font-bold tracking-tight">VikkyCodez</span>
        </div>

        {/* Quick Links */}
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm font-medium text-gray-300">
          <li>
            <HashLink to="/#home" className="hover:text-white transition-colors duration-300">
              Home
            </HashLink>
          </li>
          <li>
            <a href="#projects" className="hover:text-white transition-colors duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition-colors duration-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Social Links */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/VictorUmekwe"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-300 transition-colors duration-300"
          >
            <Github className="size-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/victor-umekwe-99030b107/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-300 transition-colors duration-300"
          >
            <Linkedin className="size-5" />
          </a>
          <a
            href="https://x.com/flexy9"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-300 transition-colors duration-300"
          >
            <Twitter className="size-5" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} VikkyCodez. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
