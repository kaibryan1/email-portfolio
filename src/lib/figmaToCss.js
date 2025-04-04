import fs from "fs";

/**
 * Converts Figma Variables API response into CSS variables and saves it to a file.
 * @param {Object} data - The Figma API response data.
 */
export function convertFigmaToCSS(data) {
  let cssContent = `:root {\n`;

  if (!data || !data.variables || !data.variables.collections) {
    console.error("Invalid Figma variables data");
    return ":root {\n}\n"; // Return empty root if data is invalid
  }

  const collections = data.variables.collections;
  const variablesMap = {}; // To store resolved variables

  // Loop through collections (brand, alias, mapped)
  for (const collectionId in collections) {
    const collection = collections[collectionId];
    const isAliasCollection = collection.name.toLowerCase().includes("alias");

    for (const variableId in collection.variableIds) {
      const variable = data.variables.variables[variableId];
      if (!variable) continue;

      const variableName = cleanVariableName(variable.name);
      const value = resolveVariableValue(variable, data.variables.variables);

      if (value) {
        variablesMap[variableName] = value;
      }
    }
  }

  // Add extracted colors to CSS
  for (const [name, color] of Object.entries(variablesMap)) {
    cssContent += `  --${name}: ${color};\n`;
  }

  cssContent += `}\n`;

  // Save to CSS file
  fs.writeFileSync("public/variables.css", cssContent);
  return cssContent;
}

/**
 * Cleans Figma variable names into proper CSS variable format.
 * Example: "color/Blue/50" → "color-blue-50"
 */
function cleanVariableName(name) {
  return name.toLowerCase().replace(/\//g, "-").replace(/\s+/g, "-");
}

/**
 * Resolves the variable value, handling aliases.
 */
function resolveVariableValue(variable, allVariables) {
  if (variable.aliasForId) {
    // If this is an alias, get the actual value
    const aliasedVariable = allVariables[variable.aliasForId];
    return aliasedVariable
      ? resolveVariableValue(aliasedVariable, allVariables)
      : null;
  }

  if (variable.value && variable.value.r !== undefined) {
    // Convert RGB to CSS format
    const { r, g, b } = variable.value;
    return `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(
      b * 255
    )})`;
  }

  return null;
}
