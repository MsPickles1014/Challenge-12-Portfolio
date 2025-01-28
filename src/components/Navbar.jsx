import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = () => {
    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/About", label: "About" },
        { path: "/Portfolio", label: "Portfolio" },
        { path: "/Contact", label: "Contact" },
        { path: "/Resume", label: "Resume" },
    ];

    return (
        <nav className="w-full p-4 flex justify-start space-x-6"  
             aria-label="Main navigation">
             
             <ul >
                {navLinks.map(({ path, label }) => (
                    
                    <li key={path}>
                        <NavLink
                            to={path}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-green-600 font-bold"
                                    : "text-gray-300 hover:text-blue-700"
                            }
                            
                        >
                            {label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Navbar.propTypes = {
    theme: PropTypes.string.isRequired,
    toggleTheme: PropTypes.func.isRequired,
};

export default Navbar;
