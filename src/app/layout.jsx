// import { Inter, Geist_Mono } from "next/font/google";
import "./globals.scss";
import { Manrope, Reddit_Mono } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "./store/ThemeProvider";
import ThemeSwitcher from "./components/themeSwitcher/ThemeSwitcher";
import ThemeFavicon from "./components/themeFavicon/ThemeFavicon";

// Pixel Fonts
const jersery10 = localFont({
  src: "../../public/fonts/pixel/Jersey10.ttf",
  display: "swap",
  variable: "--jersey10",
});

const pixterGranular = localFont({
  src: "../../public/fonts/pixel/PixterGranular.ttf",
  display: "swap",
  variable: "--pixterGranular",
});

// Neue Fonts
const manrope = Manrope({
  variable: "--manrope",
  subsets: ["latin"],
});

const redditMono = Reddit_Mono({
  variable: "--reddit-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kai Bryant - Creative Web and UX Designer",
  description: "A creative Web and User Experience specialist.",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html
        lang="en"
        data-theme="neue"
        className={`${jersery10.variable} ${pixterGranular.variable} ${manrope.variable} ${redditMono.variable}`}
      >
        <body>
          <ThemeFavicon />
          <ThemeSwitcher />
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
