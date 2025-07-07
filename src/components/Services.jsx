import { motion } from "framer-motion";
import { ArrowDownUp, Code, LayoutTemplate, Server, Settings } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Building modern, responsive websites with cutting-edge technologies.",
    icon: <Code className="text-indigo-500 w-10 h-10 mb-4" />,
  },
  {
    title: "Frontend Engineering",
    description: "Creating  smooth user inteface that enhances performance and user experience.",
    icon: <LayoutTemplate className="text-indigo-500 w-10 h-10 mb-4" />,
  },
  {
    title: "Backend Engineering",
    description: "Bulding robust APIs and scalable databases for seamless data flow.",
    icon: <Server className="text-indigo-500 w-10 h-10 mb-4" />,
  },
  {
    title: "Deployment",
    description: "Let me help you host  your website/webapp and also help get a domain name",
    icon: <ArrowDownUp className="text-indigo-500 w-10 h-10 mb-4" />,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen flex justify-center items-center bg-gray-900 text-white py-16 md:py-0"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
         <Settings className="inline-block text-indigo-400 mr-2"/>
          My Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-indigo-500/30 transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
