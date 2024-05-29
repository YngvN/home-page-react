import React, { useEffect } from "react";
import { useDarkModePreference } from "../../utility/actions/darkmode.action";

function BtnDarkmode() {
    const [isDark, toggleDarkMode] = useDarkModePreference();

    useEffect(() => {
        if (isDark) {
            document.body.classList.add("dark");
            document.body.classList.remove("light");
        } else {
            document.body.classList.add("light");
            document.body.classList.remove("dark");
        }
    }, [isDark]);

    return (
        <button className="btn-darkmode color-bg">
            <div
                className={`icon-darkmode icon-container ${isDark ? "dark" : "light"}`}
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
            >
                <span className="top-left light-ray"></span>
                <span className="top-middle light-ray"></span>
                <span className="top-right light-ray"></span>
                <span className="bottom-left light-ray"></span>
                <span className="bottom-middle light-ray"></span>
                <span className="bottom-right light-ray"></span>
                <span className="center-left light-ray"></span>
                <span className="center-right light-ray"></span>
                <span className="sun"></span>
                <span className="moon"></span>
            </div>
        </button>
    );
}

export default BtnDarkmode;
