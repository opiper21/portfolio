import { useState } from "react";
import CustomCursor from "./components/CustomCursor";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import { useScrollReveal } from "./hooks/useScrollReveal";

function App() {
  const [loading, setLoading] = useState(true);

  // ✅ Only enable scroll reveal AFTER loading is done
  useScrollReveal(!loading);

  return (
    <>
      <CustomCursor />

      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <div className="min-h-screen bg-cream">
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Projects />
          <Contacts />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
