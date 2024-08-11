import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="pb-20">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="my-10 text-center text-4xl"
      >
        Entre em contato!
      </motion.h2>
      <div className="items-center justify-center text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="my-4"
        >
          Campinas, São Paulo, Brasil
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="my-4"
        >
          Rua Emerson José Moreira - Chácara Primavera
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="my-4"
        >
          +55 19 981740602
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 1 }}
          href="#"
          className="border-b"
        >
          marcosvaleriofilho@outlook.com
        </motion.a>
        <div className="flex justify-center space-x-4 mt-6">
          <a
            href="https://github.com/marcosvaleriofilho"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-gray-600 transition-colors text-4xl" />
          </a>
          <a
            href="https://linkedin.com/in/marcosavaleriofilho"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-700 transition-colors text-4xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
