import React, { useEffect, useState } from "react";

interface StreamingTextProps {
  text: string;
  speed?: number; // ms per character
  className?: string;
  onDone?: () => void;
}

const StreamingText: React.FC<StreamingTextProps> = ({ text, speed = 18, className = "", onDone }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    if (!text) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((_prev) => {
        const next = text.slice(0, i + 1);
        if (next.length === text.length) {
          clearInterval(interval);
          if (onDone) onDone();
        }
        return next;
      });
      i++;
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, onDone]);

  return (
    <span className={className}>
      {displayed.split("").map((char, idx) => (
        <span key={idx} style={{ display: "inline-block", transition: "opacity 0.15s", opacity: 1 }}>{char === " " ? "\u00A0" : char}</span>
      ))}
    </span>
  );
};

export default StreamingText;
