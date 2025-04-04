import { Children } from "react";

export default function Pill({ children }) {
  return (
    <span>
      <p
        style={{
          padding: "var(--spacing-sm) var(--spacing-md)",
          border: "1px solid var(--border-primary)",
          borderRadius: "var(--border-radius-rounded)",
          width: "max-content",
          fontSize: "var(--font-size-body-sm)",
        }}
      >
        {children}
      </p>
    </span>
  );
}
