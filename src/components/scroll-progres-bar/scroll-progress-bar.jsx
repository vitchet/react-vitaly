import { useCallback } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";

export const ScrollProgressBar = () => {
  const [size, setSize] = useState(0);

  let styles = {
    width: `${size}%`,
    height: "100%",
    backgroundColor: "red",
  };

  const handleScroll = useCallback(() => {
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const newSize = (window.scrollY / maxScroll) * 100;
    setSize(newSize);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div style={styles}></div>;
};
