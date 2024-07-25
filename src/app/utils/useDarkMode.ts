import { useEffect, useState } from "react";

const useDarkMode = () => {
    const [prefersDarkMode, setPrefersDarkMode] = useState(false);

    useEffect(() => {
        const darkModeListener = window.matchMedia("(prefers-color-scheme: dark)");
        setPrefersDarkMode(darkModeListener.matches);

        const handleDarkModeChange = (e: MediaQueryListEvent) => {
            setPrefersDarkMode(e.matches);
        };

        darkModeListener.addEventListener("change", handleDarkModeChange);

        return () => {
            darkModeListener.removeEventListener("change", handleDarkModeChange);
        };
    }, []);

    return prefersDarkMode;
};

export default useDarkMode;