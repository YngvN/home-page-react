import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";
import { Background } from "../components/background";


export function Layout() {
    return (
        <div>
            <Background />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}