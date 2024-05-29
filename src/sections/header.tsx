import React from "react";
import { Nav } from "../components/nav";
import BtnDarkmode from "../components/buttons/darkmode";

export function Header() {

    return (
        <header>
            <BtnDarkmode />
            <Nav />
        </header>
    );
}