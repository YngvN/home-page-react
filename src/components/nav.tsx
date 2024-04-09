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
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
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

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Hamburger from "./buttons/hamburger";

// export function Nav() {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleDropdown = () => {
//         const dropdownMenu = document.querySelector(".dropdown-menu") as HTMLElement | null;
//         if (dropdownMenu) {
//             dropdownMenu.style.opacity = "0";
//         }
//         // Check if the dropdown is closed and open it
//         if (!isOpen) {
//             setIsOpen(true); // Open the dropdown

//             // Set opacity to 0 and then toggle to 1 after a delay
//             if (dropdownMenu) {


//                 setTimeout(() => {
//                     dropdownMenu.style.opacity = "1";
//                 }, 300);
//             }
//         } else {
//             // Check if the dropdown is open and close it
//             // Close the dropdown

//             // Set opacity to 1 and then toggle to 0 after a delay
//             if (dropdownMenu) {
//                 dropdownMenu.style.opacity = "0";
//                 setTimeout(() => {

//                     setIsOpen(false);
//                 }, 300);

//             }
//         }
//     };

//     return (
//         <nav>
//             <div className={`dropdown ${isOpen ? "open" : ""}`}>
//                 <button className="dropdown-toggle btn-hamburger" onClick={toggleDropdown}>
//                     <Hamburger isOpen={isOpen} />
//                 </button>
//                 {isOpen && (
//                     <ul className="dropdown-menu">
//                         <li>
//                             <Link to="/">Home</Link>
//                         </li>
//                         <li>
//                             <Link to="/contact">Contact</Link>
//                         </li>
//                         <li>
//                             <Link to="/music">Music</Link>
//                         </li>
//                         <li>
//                             <Link to="/developer">Development</Link>
//                         </li>
//                     </ul>
//                 )}
//             </div>
//         </nav>
//     );
// }
