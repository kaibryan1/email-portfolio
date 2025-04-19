// themes.js
export const themes = {
  neue: {
    alias: {
      "--font-headings": "var(--neue-font-primary)",
      "--font-body": "var(--neue-font-primary)",
      "--font-tertiary": "var(--neue-font-secondary)",

      "--font-size-h1": "var(--neue-font-size-h1)",
      "--font-size-h1-desktop": "var(--neue-font-size-h1-desktop)",
      "--font-size-h2": "var(--neue-font-size-h2)",
      "--font-size-h2-desktop": "var(--neue-font-size-h2-desktop)",
      "--font-size-h3": "var(--neue-font-size-h3)",
      "--font-size-h3-desktop": "var(--neue-font-size-h3-desktop)",
      "--font-size-h4": "var(--neue-font-size-h4)",
      "--font-size-h4-desktop": "var(--neue-font-size-h4-desktop)",

      "--font-size-body-sm": "var(--neue-font-size-body-sm)",
      "--font-size-body-sm-desktop": "var(--neue-font-size-body-sm-desktop)",
      "--font-size-body-md": "var(--neue-font-size-body-md)",
      "--font-size-body-md-desktop": "var(--neue-font-size-body-md-desktop)",
      "--font-size-body-lg": "var(--neue-font-size-body-lg)",
      "--font-size-body-lg-desktop": "var(--neue-font-size-body-lg-desktop)",

      "--font-size-label-sm": "var(--neue-font-size-label-sm)",
      "--font-size-label-sm-desktop": "var(--neue-font-size-label-sm-desktop)",
      "--font-size-label-md": "var(--neue-font-size-label-md)",
      "--font-size-label-md-desktop": "var(--neue-font-size-label-md-desktop)",

      "--line-height-h1": "var(--neue-line-height-h1)",
      "--line-height-h1-desktop": "var(--neue-line-height-h1-desktop)",
      "--line-height-h2": "var(--neue-line-height-h2)",
      "--line-height-h2-desktop": "var(--neue-line-height-h2-desktop)",
      "--line-height-h3": "var(--neue-line-height-h3)",
      "--line-height-h3-desktop": "var(--neue-line-height-h3-desktop)",
      "--line-height-h4": "var(--neue-line-height-h4)",
      "--line-height-h4-desktop": "var(--neue-line-height-h4-desktop)",

      "--line-height-body-sm": "var(--neue-line-height-body-sm)",
      "--line-height-body-sm-desktop":
        "var(--neue-line-height-body-sm-desktop)",
      "--line-height-body-md": "var(--neue-line-height-body-md)",
      "--line-height-body-md-desktop":
        "var(--neue-line-height-body-md-desktop)",
      "--line-height-body-lg": "var(--neue-line-height-body-lg)",
      "--line-height-body-lg-desktop":
        "var(--neue-line-height-body-lg-desktop)",

      "--line-height-label-sm": "var(--neue-line-height-label-sm)",
      "--line-height-label-sm-desktop":
        "var(--neue-line-height-label-sm-desktop)",
      "--line-height-label-md": "var(--neue-line-height-label-md)",
      "--line-height-label-md-desktop":
        "var(--neue-line-height-label-md-desktop)",

      "--letter-spacing-h1": "var(--neue-letter-spacing-h1)",
      "--letter-spacing-h1-desktop": "var(--neue-letter-spacing-h1-desktop)",
      "--letter-spacing-h2": "var(--neue-letter-spacing-h2)",
      "--letter-spacing-h2-desktop": "var(--neue-letter-spacing-h2-desktop)",
      "--letter-spacing-h3": "var(--neue-letter-spacing-h3)",
      "--letter-spacing-h3-desktop": "var(--neue-letter-spacing-h3-desktop)",
      "--letter-spacing-h4": "var(--neue-letter-spacing-h4)",
      "--letter-spacing-h4-desktop": "var(--neue-letter-spacing-h4-desktop)",

      "--letter-spacing-body-lg": "var(--neue-letter-spacing-body-lg)",
      "--letter-spacing-body-lg-desktop":
        "var(--neue-letter-spacing-body-lg-desktop)",

      "--para-spacing-body-sm": "var(--neue-para-spacing-body-sm)",
      "--para-spacing-body-sm-desktop":
        "var(--neue-para-spacing-body-sm-desktop)",
      "--para-spacing-body-md": "var(--neue-para-spacing-body-md)",
      "--para-spacing-body-md-desktop":
        "var(--neue-para-spacing-body-md-desktop)",
      "--para-spacing-body-lg": "var(--neue-para-spacing-body-lg)",
      "--para-spacing-body-lg-desktop":
        "var(--neue-para-spacing-body-lg-desktop)",
    },
    light: {
      // Brand Color
      "--primary-50": "var(--neue-color-brand-50)",
      "--primary-100": "var(--neue-color-brand-100)",
      "--primary-300": "var(--neue-color-brand-300)",
      "--primary-500": "var(--neue-color-brand-500)",
      "--primary-700": "var(--neue-color-brand-700)",
      "--primary-800": "var(--neue-color-brand-800)",

      // neutral Colors
      "--neutral-50": "var(--neue-color-grey-50)", //page
      "--neutral-100": "var(--neue-color-grey-100)",
      "--neutral-300": "var(--neue-color-grey-300)",
      "--neutral-500": "var(--neue-color-grey-500)",
      "--neutral-700": "var(--neue-color-grey-700)",
      "--neutral-800": "var(--neue-color-grey-800)", //body
      "--neutral-white": "var(--neue-color-grey-0)", // Pure white
      "--neutral-black": "var(--neue-color-grey-1000)", // Pure Black
      // ...other tokens for neue light mode
    },
    dark: {
      // Brand Color
      "--primary-50": "var(--neue-color-brand-800)", //surface
      "--primary-100": "var(--neue-color-brand-700)", //surface
      "--primary-300": "var(--neue-color-brand-500)", //surface
      "--primary-500": "var(--neue-color-brand-300)", //surface
      "--primary-700": "var(--neue-color-brand-100)", //surface
      "--primary-800": "var(--neue-color-brand-50)", //surface

      // neutral Colors
      "--neutral-50": "var(--neue-color-grey-800)", //page
      "--neutral-100": "var(--neue-color-grey-700)",
      "--neutral-300": "var(--neue-color-grey-500)",
      "--neutral-500": "var(--neue-color-grey-300)",
      "--neutral-700": "var(--neue-color-grey-100)",
      "--neutral-800": "var(--neue-color-grey-50)", //body
      "--neutral-white": "var(--neue-color-grey-1000)", // Pure White
      "--neutral-black": "var(--neue-color-grey-0)", // Pure Black

      // ...other tokens for neue dark mode
    },
  },
  pixel: {
    alias: {
      "--font-headings": "var(--pixel-font-primary)",
      "--font-body": "var(--pixel-font-secondary)",
      "--font-tertiary": "var(--pixel-font-primary)",

      "--font-size-h1": "var(--pixel-font-size-h1)",
      "--font-size-h1-desktop": "var(--pixel-font-size-h1-desktop)",
      "--font-size-h2": "var(--pixel-font-size-h2)",
      "--font-size-h2-desktop": "var(--pixel-font-size-h2-desktop)",
      "--font-size-h3": "var(--pixel-font-size-h3)",
      "--font-size-h3-desktop": "var(--pixel-font-size-h3-desktop)",
      "--font-size-h4": "var(--pixel-font-size-h4)",
      "--font-size-h4-desktop": "var(--pixel-font-size-h4-desktop)",

      "--font-size-body-sm": "var(--pixel-font-size-body-sm)",
      "--font-size-body-sm-desktop": "var(--pixel-font-size-body-sm-desktop)",
      "--font-size-body-md": "var(--pixel-font-size-body-md)",
      "--font-size-body-md-desktop": "var(--pixel-font-size-body-md-desktop)",
      "--font-size-body-lg": "var(--pixel-font-size-body-lg)",
      "--font-size-body-lg-desktop": "var(--pixel-font-size-body-lg-desktop)",

      "--font-size-label-sm": "var(--pixel-font-size-label-sm)",
      "--font-size-label-sm-desktop": "var(--pixel-font-size-label-sm-desktop)",
      "--font-size-label-md": "var(--pixel-font-size-label-md)",
      "--font-size-label-md-desktop": "var(--pixel-font-size-label-md-desktop)",

      "--line-height-h1": "var(--pixel-line-height-h1)",
      "--line-height-h1-desktop": "var(--pixel-line-height-h1-desktop)",
      "--line-height-h2": "var(--pixel-line-height-h2)",
      "--line-height-h2-desktop": "var(--pixel-line-height-h2-desktop)",
      "--line-height-h3": "var(--pixel-line-height-h3)",
      "--line-height-h3-desktop": "var(--pixel-line-height-h3-desktop)",
      "--line-height-h4": "var(--pixel-line-height-h4)",
      "--line-height-h4-desktop": "var(--pixel-line-height-h4-desktop)",

      "--line-height-body-sm": "var(--pixel-line-height-body-sm)",
      "--line-height-body-sm-desktop":
        "var(--pixel-line-height-body-sm-desktop)",
      "--line-height-body-md": "var(--pixel-line-height-body-md)",
      "--line-height-body-md-desktop":
        "var(--pixel-line-height-body-md-desktop)",
      "--line-height-body-lg": "var(--pixel-line-height-body-lg)",
      "--line-height-body-lg-desktop":
        "var(--pixel-line-height-body-lg-desktop)",

      "--line-height-label-sm": "var(--pixel-line-height-label-sm)",
      "--line-height-label-sm-desktop":
        "var(--pixel-line-height-label-sm-desktop)",
      "--line-height-label-md": "var(--pixel-line-height-label-md)",
      "--line-height-label-md-desktop":
        "var(--pixel-line-height-label-md-desktop)",

      "--letter-spacing-h1": "var(--pixel-letter-spacing-h1)",
      "--letter-spacing-h1-desktop": "var(--pixel-letter-spacing-h1-desktop)",
      "--letter-spacing-h2": "var(--pixel-letter-spacing-h2)",
      "--letter-spacing-h2-desktop": "var(--pixel-letter-spacing-h2-desktop)",
      "--letter-spacing-h3": "var(--pixel-letter-spacing-h3)",
      "--letter-spacing-h3-desktop": "var(--pixel-letter-spacing-h3-desktop)",
      "--letter-spacing-h4": "var(--pixel-letter-spacing-h4)",
      "--letter-spacing-h4-desktop": "var(--pixel-letter-spacing-h4-desktop)",

      "--letter-spacing-body-lg": "var(--pixel-letter-spacing-body-lg)",
      "--letter-spacing-body-lg-desktop":
        "var(--pixel-letter-spacing-body-lg-desktop)",

      "--para-spacing-body-sm": "var(--pixel-para-spacing-body-sm)",
      "--para-spacing-body-sm-desktop":
        "var(--pixel-para-spacing-body-sm-desktop)",
      "--para-spacing-body-md": "var(--pixel-para-spacing-body-md)",
      "--para-spacing-body-md-desktop":
        "var(--pixel-para-spacing-body-md-desktop)",
      "--para-spacing-body-lg": "var(--pixel-para-spacing-body-lg)",
      "--para-spacing-body-lg-desktop":
        "var(--pixel-para-spacing-body-lg-desktop)",
    },
    light: {
      // Brand Color
      "--primary-50": "var(--pixel-color-brand-50)",
      "--primary-100": "var(--pixel-color-brand-100)",
      "--primary-300": "var(--pixel-color-brand-300)",
      "--primary-500": "var(--pixel-color-brand-500)",
      "--primary-700": "var(--pixel-color-brand-700)",
      "--primary-800": "var(--pixel-color-brand-800)",

      // neutral Colors
      "--neutral-50": "var(--pixel-color-grey-50)", //page
      "--neutral-100": "var(--pixel-color-grey-100)",
      "--neutral-300": "var(--pixel-color-grey-300)",
      "--neutral-500": "var(--pixel-color-grey-500)",
      "--neutral-700": "var(--pixel-color-grey-700)",
      "--neutral-800": "var(--pixel-color-grey-800)", //body
      "--neutral-white": "var(--pixel-color-grey-0)", // Pure white
      "--neutral-black": "var(--pixel-color-grey-1000)", // Pure Black
      // ...other tokens for pixel light mode
    },
    dark: {
      // Brand Color
      "--primary-50": "var(--pixel-color-brand-800)", //surface
      "--primary-100": "var(--pixel-color-brand-700)", //surface
      "--primary-300": "var(--pixel-color-brand-500)", //surface
      "--primary-500": "var(--pixel-color-brand-300)", //surface
      "--primary-700": "var(--pixel-color-brand-100)", //surface
      "--primary-800": "var(--pixel-color-brand-50)", //surface

      // neutral Colors
      "--neutral-50": "var(--pixel-color-grey-800)", //page
      "--neutral-100": "var(--pixel-color-grey-700)",
      "--neutral-300": "var(--pixel-color-grey-500)",
      "--neutral-500": "var(--pixel-color-grey-300)",
      "--neutral-700": "var(--pixel-color-grey-100)",
      "--neutral-800": "var(--pixel-color-grey-50)", //body
      "--neutral-white": "var(--pixel-color-grey-1000)", // Pure White
      "--neutral-black": "var(--pixel-color-grey-0)", // Pure Black
      // ...other tokens for pixel dark mode
    },
  },
};
