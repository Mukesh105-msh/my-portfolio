import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [hide, setHide] = useState(false);
  const [remove, setRemove] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setHide(true), 1500);
    const timer2 = setTimeout(() => setRemove(true), 2000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (remove) return null;

  return (
    <div className={`loading-screen ${hide ? "hide" : ""}`}>
      <div className="flex flex-col items-center gap-6">
        <div className="loader" />
        <p className="text-primary-400 font-display text-xl font-semibold tracking-wider animate-pulse">
          MUKESH<span className="text-white">.</span>
        </p>
      </div>
    </div>
  );
}
