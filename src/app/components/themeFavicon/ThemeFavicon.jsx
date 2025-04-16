"use client";
import { useEffect, useState } from "react";

export default function ThemeFavicon() {
  const [faviconHref, setFaviconHref] = useState("/favicon-default.ico");

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "pixel") {
      setFaviconHref("/favicon_pixel.png");
    } else if (theme === "neue") {
      setFaviconHref("/favicon_neue.png");
    } else {
      setFaviconHref("/favicon_neue.png");
    }
  }, []);

  return <link rel="icon" type="image/png" href={faviconHref} sizes="32x32" />;
}
