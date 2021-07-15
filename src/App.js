import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navigationbar";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Protfolio";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import DotLoader from "react-spinners/DotLoader";
import "./app.css";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="app">
          <DotLoader color={"#548CA8"} loading={loading} size={70} />
        </div>
      ) : (
        <div>
          <Navbar />
          <Home />
          <Portfolio />
          <About />
          <Contact />
        </div>
      )}
    </div>
  );
}
export default App;
