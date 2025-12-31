import React from "react";
import { NavLink } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import useMode from "../context/DarkMode";

const MObileVIew = ({ isOpen, toggleCross }) => {
  const { changeMode, setIsCross } = useTheme();
  const { themeMode } = useMode();
  const themechanger = () => {
    // Close the menu unconditionally before changing theme
    toggleCross();
    changeMode();
  };

  return (
    <>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={toggleCross}
          ></div>
          <div className="fixed inset-y-0 left-0 w-3/4 bg-indigo-200 dark:bg-black p-6 z-50 transform transition-transform duration-300 ease-in-out">
            <ul className="flex flex-col gap-6 font-bold items-start">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-green-500" : "text-black dark:text-white"
                    } hover:font-extrabold duration-300 hover:text-purple-700 hover:text-xl`
                  }
                  to=""
                  onClick={toggleCross}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-green-500" : "text-black dark:text-white"
                    } hover:text-purple-700 hover:text-xl hover:font-extrabold duration-300`
                  }
                  to="/about"
                  onClick={toggleCross}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-green-500" : "text-black dark:text-white"
                    } hover:text-purple-700 hover:text-xl hover:font-extrabold duration-300`
                  }
                  to="/contact"
                  onClick={toggleCross}
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>
            <button
              onClick={themechanger}
              className="bg-green-600 text-white dark:bg-indigo-950 p-2 mt-6"
            >
              {themeMode === "light" ? (
                <span className="material-symbols-outlined">dark_mode</span>
              ) : (
                <span className="material-symbols-outlined">wb_sunny</span>
              )}
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default MObileVIew;
