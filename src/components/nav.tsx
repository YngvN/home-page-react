import React from "react";
import { Link } from "react-router-dom";

export function Nav() {


    return (
        <nav>
            <ul>
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
        </nav>
    );
}
