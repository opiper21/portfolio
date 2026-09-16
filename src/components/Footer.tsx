function Footer() {
  const currentYear = new Date().getFullYear();

  // 🌐 External links (social profiles)
  const socials = [
    { name: "GitHub", url: "https://github.com/opiper21" },
    { name: "Email", url: "mailto:sodiqolabode@gmail.com" },
  ];

  // 🏠 In-page navigation (jumps to sections)
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-brown text-cream border-t-4 border-brown overflow-hidden">
      <div className="absolute inset-0 retro-grid pointer-events-none opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Top: Big CTA */}
        <div className="text-center mb-16 pb-16 border-b-4 border-cream/20">
          <h2 className="font-display text-5xl md:text-7xl uppercase leading-none mb-6">
            Let's build
            <br />
            <span className="text-mustard">something great.</span>
          </h2>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-mustard text-brown font-display uppercase text-sm px-10 py-5 border-4 border-cream shadow-retro-orange hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 transition-all duration-200"
          >
            Start a Project →
          </a>
        </div>

        {/* Middle: Links Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div>
            <h3 className="font-display text-2xl uppercase mb-4">
              Piper<span className="text-burnt">X</span>
            </h3>
            <p className="font-mono text-xs uppercase tracking-wider text-cream/60 mb-4">
              Full Stack Web Developer
            </p>
            <p className="text-cream/70 text-sm leading-relaxed max-w-xs">
              Building bold digital experiences that help businesses grow and
              stand out online.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider font-bold text-mustard mb-4">
              — Navigation
            </p>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-cream/80 hover:text-mustard hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider font-bold text-mustard mb-4">
              — Find Me Online
            </p>
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={
                    social.url.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase px-4 py-2 border-2 border-cream/40 text-cream/80 hover:bg-mustard hover:text-brown hover:border-mustard transition-all duration-200"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t-2 border-cream/20">
          <p className="font-mono text-xs uppercase text-cream/60">
            © {currentYear} Sodiq Olabode. All rights reserved.
          </p>
          <p className="font-mono text-xs uppercase text-cream/60">
            Built with <span className="text-burnt">♥</span> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
