const fs = require("fs");
const tokens = require("./tokens.json");

let scss = "";

// Function to convert JSON tokens to SCSS variables with brand prefix
const processTokens = (obj, brandName = "", parentKey = "$") => {
  Object.entries(obj).forEach(([key, value]) => {
    // Fix spaces in token names: replace space with "-"
    const newKey = parentKey
      ? `${parentKey}-${key.replace(/\s+/g, "-")}`
      : `$${key.replace(/\s+/g, "-")}`;

    // Add brand prefix (if available)
    const prefixedKey = brandName
      ? `$-${brandName}${newKey.substring(1)}`
      : newKey;

    if (value && typeof value === "object" && !value.$value) {
      processTokens(value, brandName, newKey);
    } else if (value && value.$value !== undefined) {
      const formattedValue =
        typeof value.$value === "number"
          ? `${value.$value}px`
          : `${value.$value}`;

      scss += `${prefixedKey}: ${formattedValue};\n`;
    }
  });
};

// Generate base tokens with brand prefix
scss += "\n// 🎨 Base Tokens (Primitives)\n";
processTokens(tokens.primitives.pixel, "pixel");

// Function to process theme tokens (Light/Dark) with brand prefix
const processThemeTokens = (themeTokens, brandName, themeName) => {
  scss += `\n// 🌞 ${themeName} Theme for ${brandName}\n`;

  Object.entries(themeTokens).forEach(([key, value]) => {
    const formattedKey = `$-${brandName}-${themeName.toLowerCase()}-${key.replace(
      /\s+/g,
      "-"
    )}`;

    // Ensure `value` is a string before calling `.replace()`
    let reference = "";
    if (typeof value === "string") {
      reference = `$-${brandName}-${value.replace(/\./g, "-")}`;
    } else if (typeof value === "object" && value.$value) {
      reference =
        typeof value.$value === "number"
          ? `${value.$value}px`
          : `${value.$value}`;
    } else {
      console.warn(`⚠️ Skipping unexpected token format for ${key}:`, value);
      return;
    }

    scss += `${formattedKey}: ${reference};\n`;
  });
};

// Ensure that tokens for both pixel and neue brands exist before processing
const brands = ["pixel", "neue"];

// Generate theme tokens for both brands
brands.forEach((brand) => {
  // Check if the token data exists for the given brand before processing
  if (tokens.alias?.light)
    processThemeTokens(tokens.alias.light, brand, "light");
  if (tokens.alias?.dark) processThemeTokens(tokens.alias.dark, brand, "dark");
});

// Write to SCSS file
fs.writeFileSync("src/styles/_tokens.scss", scss);
console.log("✅ SCSS tokens with brand prefixes generated correctly!");
