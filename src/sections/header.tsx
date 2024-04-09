import React from "react";
import { Nav } from "../components/nav";
import BtnDarkmode from "../components/buttons/darkmode";

export function Header() {

    return (
        <header>
            <button className="btn-darkmode">
                <BtnDarkmode />
            </button>
            <Nav />
        </header>
    );
}