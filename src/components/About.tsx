function About() {
  return (
    <section
      id="about"
      className="reveal relative bg-cream py-24 border-t-4 border-brown"
    >
      <div className="absolute inset-0 retro-grid pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Monogram Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-burnt translate-x-4 translate-y-4 border-4 border-brown"></div>
            <div className="relative bg-mustard h-[400px] w-full border-4 border-brown flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <h3 className="font-display text-[120px] md:text-[160px] leading-none text-brown">
                  SO
                </h3>
                <p className="font-mono text-xs uppercase tracking-[6px] text-brown/70 mt-2">
                  Full Stack Web Developer
                </p>
              </div>

              {/* Decorative retro dots */}
              <div className="absolute top-6 left-6 w-4 h-4 rounded-full bg-burnt"></div>
              <div className="absolute top-6 right-6 w-4 h-4 rounded-full bg-teal"></div>
              <div className="absolute bottom-6 left-6 w-4 h-4 rounded-full bg-teal"></div>
              <div className="absolute bottom-6 right-6 w-4 h-4 rounded-full bg-burnt"></div>
            </div>
          </div>

          {/* Right: About Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3 h-3 rounded-full bg-teal"></span>
              <span className="font-mono text-sm uppercase tracking-wider font-bold text-teal">
                About Me
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl uppercase text-brown mb-6 leading-tight">
              I turn complex problems into{" "}
              <span className="text-burnt">clean, functional code.</span>
            </h2>

            <p className="text-lg text-brown/80 mb-6 leading-relaxed">
              I'm <strong>Sodiq Olabode</strong>, a Full Stack Web Developer
              with a passion for building digital products that make a
              difference. I specialize in the complete pipeline — from designing
              the database architecture to crafting the polished user interface.
            </p>

            <p className="text-lg text-brown/80 mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source, or Making more research.
            </p>

            <a
              href="#"
              className="bg-brown text-cream font-display uppercase text-sm px-8 py-4 border-4 border-brown shadow-retro-orange hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 transition-all duration-200 inline-flex items-center gap-2"
            >
              Download CV
              <span>↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
