import React, { useEffect, useState } from "react";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="relative">
      <img
        src="light-mode-button.png"
        alt="Light Mode"
        onClick={() => setTheme("dark")}
        className={`w-12 cursor-pointer absolute right-0 transition-all duration-300 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        src="dark-mode-button.png"
        alt="Dark Mode"
        onClick={() => setTheme("light")}
        className={`w-12 cursor-pointer transition-all duration-300 ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default DarkMode;
