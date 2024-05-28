import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./buttons/hamburger";

export function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <div className={`dropdown ${isOpen ? "open" : ""}`}>
                <button className="dropdown-toggle btn-hamburger" onClick={toggleDropdown}>
                    <Hamburger isOpen={isOpen} />
                </button>
                {isOpen && (
                    <ul className="dropdown-menu">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {/* <li>
                            <Link to="/contact">Contact</Link>
                        </li> */}
                        <li>
                            <Link to="/music">Music</Link>
                        </li>
                        <li>
                            <Link to="/developer">Development</Link>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
}
