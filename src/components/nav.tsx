// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Hamburger from "./buttons/hamburger";

// export function Nav() {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleDropdown = () => {
//         setIsOpen(!isOpen);
//     };

//     const closeDropdown = () => {
//         setIsOpen(false);
//     };

//     return (
//         <nav>
//             <div className={`dropdown ${isOpen ? "open" : ""}`}>
//                 <button className="dropdown-toggle btn-hamburger color-bg" onClick={toggleDropdown}>
//                     <Hamburger isOpen={isOpen} />
//                 </button>
//                 {isOpen && (
//                     <ul className="dropdown-menu">

//                         <Link to="/" onClick={closeDropdown}>Home</Link>

//                         {/* Uncomment if you want to include the contact link */}
//                         {/* <li>
//                             <Link to="/contact" onClick={closeDropdown}>Contact</Link>
//                         </li> */}

//                         <Link to="/music" onClick={closeDropdown}>Music</Link>


//                         <Link to="/developer" onClick={closeDropdown}>Development</Link>

//                     </ul>
//                 )}
//             </div>
//         </nav>
//     );
// }
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "./buttons/hamburger";

export function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <nav>
            <div className={`dropdown ${isOpen ? "open" : ""}`}>
                <button className="dropdown-toggle btn-hamburger color-bg" onClick={toggleDropdown}>
                    <Hamburger isOpen={isOpen} />
                </button>
                {isOpen && (
                    <ul className="dropdown-menu">
                        <li>
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={closeDropdown}
                            >
                                Home
                            </NavLink>
                        </li>
                        {/* Uncomment if you want to include the contact link */}
                        {/* <li>
                            <NavLink 
                                to="/contact" 
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={closeDropdown}
                            >
                                Contact
                            </NavLink>
                        </li> */}
                        <li>
                            <NavLink
                                to="/music"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={closeDropdown}
                            >
                                Music
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/developer"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={closeDropdown}
                            >
                                Development
                            </NavLink>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
}
