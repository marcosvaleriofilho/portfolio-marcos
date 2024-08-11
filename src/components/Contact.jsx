import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="pb-20">
      <motion.h2 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="my-10 text-center text-4xl">
        Entre em contato!
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5, delay: 1 }} className="my-4">
          Campinas, São Paulo, Brasil
        </motion.p>
        <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.5, delay: 1 }} className="my-4">
          Rua Emerson José Moreira - Chácara Primavera
        </motion.p>
        <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5, delay: 1 }} className="my-4">
          +55 19 981740602
        </motion.p>
        <div>
          <motion.a whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.5, delay: 1 }} className="my-4 block border-b" href="https://linkedin.com/in/marcosavaleriofilho" target="_blank" rel="noopener noreferrer">
            Linkedin
          </motion.a>
        </div>
        <div>
          <motion.a whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5, delay: 1 }} className="my-4 block border-b" href="https://github.com/in/marcosvaleriofilho" target="_blank" rel="noopener noreferrer">
            GitHub
          </motion.a>
        </div>
        <div>
          <motion.a whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} transition={{ duration: 0.5, delay: 1 }} className="my-4 block border-b" href="mailto:marcosvaleriofilho@outlook.com">
            marcosvaleriofilho@outlook.com
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
 