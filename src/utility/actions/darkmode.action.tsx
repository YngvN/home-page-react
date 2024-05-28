import { useState, useEffect } from 'react';

export function useDarkModePreference(): [boolean, () => void] {
    const [isDark, setIsDark] = useState<boolean>(() => {
        const savedPreference = localStorage.getItem("isDark");
        return savedPreference ? JSON.parse(savedPreference) : false;
    });

    const toggleDarkMode = () => {
        setIsDark((prevIsDark) => {
            const newPreference = !prevIsDark;
            localStorage.setItem("isDark", JSON.stringify(newPreference));
            return newPreference;
        });
    };

    useEffect(() => {
        const savedPreference = localStorage.getItem("isDark");
        if (savedPreference !== null) {
            setIsDark(JSON.parse(savedPreference));
        }
    }, []);

    return [isDark, toggleDarkMode];
}
