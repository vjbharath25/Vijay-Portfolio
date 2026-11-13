import { useEffect, useState } from "react";

// Typewriter effect. Pass a stable (module-level) array of phrases.
export default function useTyping(words, { typeSpeed = 70, deleteSpeed = 38, pause = 1500 } = {}) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(words[0]);
      return undefined;
    }

    const full = words[index];
    let timer;

    if (!deleting && text === full) {
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((index + 1) % words.length);
    } else {
      timer = setTimeout(
        () => setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1)),
        deleting ? deleteSpeed : typeSpeed
      );
    }
    return () => clearTimeout(timer);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}
