import { useEffect, useState } from "react";
import "./App.css";
import { EVENTS } from "./consts";
import HomePage from "./pages/Home.jsx";
import AboutPage from "./pages/About.jsx";


function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationsChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener(EVENTS.PUSHSTATE, onLocationsChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationsChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationsChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationsChange);
    };
  }, []);

  return (
    <main>
      {currentPath === "/" && <HomePage />}
      {currentPath === "/about" && <AboutPage />}
    </main>
  );
}

export default App;
