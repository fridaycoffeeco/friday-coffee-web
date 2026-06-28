"use client";

import { useEffect, useRef } from "react";

const FORM_ID = "cma1x9evw002bowcyvmz4auia";
const EMBED_SRC = "https://app.flashquotes.com/embed.js";

export default function FlashQuote({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container || container.querySelector("script")) return;
    const script = document.createElement("script");
    script.src = EMBED_SRC;
    script.setAttribute("form-id", FORM_ID);
    script.async = true;
    container.appendChild(script);
  }, []);

  return <div ref={ref} className={className} />;
}
