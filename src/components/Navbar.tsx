import { useEffect, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  // Track scroll position for active section + navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Find which section is currently in view
      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      sections.forEach((section) => {
        const top = (section as HTMLElement).offsetTop - 100;
        if (window.scrollY >= top) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Load saved theme preference
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDarkMode(true);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md border-b-4 border-brown py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="font-display text-2xl uppercase text-brown flex items-center gap-1"
        >
          PX
          <span className="w-2 h-2 bg-burnt"></span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`font-mono text-xs uppercase font-bold px-4 py-2 border-2 transition-all duration-200 ${
                  activeSection === link.id
                    ? "bg-burnt text-cream border-brown shadow-retro-sm"
                    : "text-brown border-transparent hover:border-brown"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle + Mobile Menu */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 border-4 border-brown bg-cream flex items-center justify-center shadow-retro-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200 text-lg"
            aria-label="Toggle dark mode"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 border-4 border-brown bg-cream flex items-center justify-center shadow-retro-sm text-lg font-bold text-brown"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t-4 border-brown mt-3">
          <ul className="px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block font-mono text-sm uppercase font-bold px-4 py-3 border-2 transition-all duration-200 ${
                    activeSection === link.id
                      ? "bg-burnt text-cream border-brown"
                      : "text-brown border-brown"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
