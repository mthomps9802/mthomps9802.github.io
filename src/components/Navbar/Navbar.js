import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center ">
        <Link to="/" className="text-xl font-bold">
          Welcome to My Portfolio
        </Link>
        <ul className="flex space-x-6">
          <li>
            <NavLink to="/"end className={({ isActive }) =>
            `hover:text-gray-400 transition ${isActive ? "text-yellow-400" : ""}`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className={({ isActive }) => 
            `hover:text-gray-400 transition ${isActive ? "text-yellow-400" : ""}`}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) =>
            `hover:text-gray-400 transition ${isActive ? "text-yellow-400" : ""}`}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/experience" className={({ isActive }) => 
            `hover:text-gray-400 transition ${isActive ? "text-yellow-400" : ""}`}
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink to="/education" className={({ isActive }) =>
            `hover:text-gray-400 transition ${isActive ? "text-yellow-400" : ""}`}
            >
              Education
            </NavLink>
          </li>
          <li>
            <NavLink to="/certifications" className={({ isActive }) =>
            `hover:text-gray-400 transition ${isActive ? "text-yellow-400" : ""}`}
            >
              Certifications
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) =>
            `hover:text-gray-400 transition ${isActive ? "text-yellow-400" : ""}`}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    <div className="w-full h-[1px] bg-gray-500"></div>
    </nav>
  );
};

export default Navbar;
