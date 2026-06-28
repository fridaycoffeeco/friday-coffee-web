"use client";

import { useRef, useState, useCallback } from "react";

/**
 * Renders the real Trustindex review widget inside a same-origin iframe.
 * The widget's loader.js executes natively in the iframe (so it keeps its
 * document.currentScript mount point and isn't disturbed by React hydration),
 * and we auto-size the iframe to its content height (same-origin, no CORS).
 */
export default function TrustReviews() {
  const ref = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(620);

  const handleLoad = useCallback(() => {
    const iframe = ref.current;
    if (!iframe) return;
    const measure = () => {
      try {
        const doc = iframe.contentWindow?.document;
        if (doc?.body) {
          const h = doc.body.scrollHeight;
          if (h > 0) setHeight(h);
        }
      } catch {
        /* same-origin, but guard anyway */
      }
    };
    measure();
    // The widget renders asynchronously; re-measure for a few seconds.
    let n = 0;
    const t = setInterval(() => {
      measure();
      if (++n > 25) clearInterval(t);
    }, 350);
  }, []);

  return (
    <iframe
      ref={ref}
      src="/trustindex.html"
      onLoad={handleLoad}
      title="Friday Coffee Co. customer reviews"
      scrolling="no"
      style={{ width: "100%", height, border: 0, overflow: "hidden" }}
    />
  );
}
