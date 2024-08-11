import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-3xl">
        <a href="https://github.com/marcosvaleriofilho" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-600 transition-colors" />
        </a>
        <a href="https://linkedin.com/in/marcosavaleriofilho" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-700 transition-colors" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
