"use client";
import { useState, useEffect } from "react";
import Tag from "../tag/Tag";

export default function TimeCode() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return <span></span>;
}

{
  /* <span>
<Tag type="normal" label="[local time]" />
<p style={{ fontSize: "var(--font-size-body-sm)" }}>
  {time.toLocaleTimeString()}
</p>
</span> */
}
