import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_rqu82xw",    // Replace with your EmailJS service ID
        "template_c6ykn8q",   // Replace with your EmailJS template ID
        formRef.current,
        "vTNmPktJQttVrcT3o"     // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-900 text-white flex items-center justify-center "
    >
      <div className="container mx-auto px-4 max-w-lg">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Send className="inline-block text-indigo-400 mr-2" />
          Contact Me
        </motion.h2>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-gray-800 rounded-lg p-8 shadow-md ring-1 ring-gray-700 flex flex-col gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-400 mb-1">
              Name
            </label>
            <input
              type="text"
              name="from_name"
              id="name"
              required
              className="bg-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-400 mb-1">
              Email
            </label>
            <input
              type="email"
              name="reply_to"
              id="email"
              required
              className="bg-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your email"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-400 mb-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows="4"
              className="bg-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your message"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            className="bg-indigo-500 text-white py-3 rounded-lg font-semibold transition duration-300 hover:bg-indigo-600 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {sent && (
            <motion.p
              className="text-green-400 text-center mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Message sent successfully!
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
