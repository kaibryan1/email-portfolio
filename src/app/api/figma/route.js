import { NextResponse } from "next/server";
import { convertFigmaToCSS } from "@/lib/figmaToCss"; // Import conversion function

export async function GET(req) {
  const { FIGMA_ACCESS_TOKEN, FIGMA_FILE_ID } = process.env;

  if (!FIGMA_ACCESS_TOKEN || !FIGMA_FILE_ID) {
    return NextResponse.json(
      { error: "Missing API credentials" },
      { status: 500 }
    );
  }

  try {
    // Fetch variables from the correct Figma API endpoint
    const response = await fetch(
      `https://api.figma.com/v1/files/${FIGMA_FILE_ID}/variables`, // Fetching variables endpoint
      {
        headers: {
          "X-Figma-Token": FIGMA_ACCESS_TOKEN,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching Figma variables: ${response.statusText}`);
    }

    // Log the full response data for debugging
    const data = await response.json();
    console.log("Fetched Variables Data:", JSON.stringify(data, null, 2));

    // Ensure the response contains the variables
    if (!data || !data.meta || !data.meta.variables) {
      return NextResponse.json(
        { error: "No variables found in Figma file" },
        { status: 500 }
      );
    }

    // If variables exist, convert them into CSS
    const cssVariables = convertFigmaToCSS(data.meta.variables);

    return NextResponse.json({
      message: "CSS variables generated!",
      css: cssVariables,
    });
  } catch (error) {
    console.error("Error in fetching Figma variables:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
