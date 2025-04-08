import React, { useEffect } from "react";
import { useTheme } from "../store/ThemeProvider";

export default function TestSwticher() {
  const { themeName, mode, updateTheme } = useTheme();

  const handleSwitch = (newTheme) => {
    // Toggle mode for demonstration purposes
    const newMode = mode === "light" ? "light" : "dark";
    updateTheme(newTheme, newMode);
  };

  return (
    <div>
      <button
        style={{ fontFamily: "var(--switzer)", padding: "10px" }}
        onClick={() => handleSwitch("neue")}
      >
        Switch to Neue
      </button>
      <button
        style={{
          fontFamily: "var(--jersey10)",
          padding: "10px",
          marginLeft: "10px",
        }}
        onClick={() => handleSwitch("pixel")}
      >
        Switch to Pixel
      </button>
    </div>
  );
}
