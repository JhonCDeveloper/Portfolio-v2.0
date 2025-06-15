import { useState, useEffect } from "react";

function AnimatedText() {
  const words = ["SOFTWARE", "DEVELOPER"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    const speed = deleting ? 50 : 100;

    const timer = setTimeout(() => {
      setDisplayText(deleting 
        ? currentWord.substring(0, displayText.length - 1)
        : currentWord.substring(0, displayText.length + 1)
      );

      if (!deleting && displayText === currentWord) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && displayText === "") {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, deleting, index, words]);

  return (
    <span className="text-darkRed transition-colors duration-300 inline-block min-w-[200px] md:min-w-[300px] text-left">
      {displayText}
    </span>
  );
}
export default AnimatedText;