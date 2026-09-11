function Services() {
  const services = [
    {
      id: "01",
      title: "Frontend Dev",
      desc: "Building fast, responsive, and interactive user interfaces with React, TypeScript, and modern CSS frameworks.",
    },
    {
      id: "02",
      title: "Backend Dev",
      desc: "Designing scalable APIs, managing databases, and handling server-side logic with Node.js and Express.",
    },
    {
      id: "03",
      title: "UI/UX Design",
      desc: "Translating complex requirements into clean, intuitive, and aesthetically pleasing digital experiences.",
    },
  ];

  return (
    <section id="services" className="reveal relative bg-mustard py-24 border-t-4 border-brown">
      <div className="absolute inset-0 retro-grid pointer-events-none opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl uppercase text-brown mb-4">
            What I Do
          </h2>
          <p className="font-mono text-sm uppercase font-bold text-brown/70">
            — Services & Expertise —
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-cream p-8 border-4 border-brown shadow-retro hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-200 flex flex-col h-full"
            >
              <span className="font-display text-5xl text-burnt block mb-4">
                {service.id}
              </span>
              <h3 className="font-display text-2xl uppercase text-brown mb-4">
                {service.title}
              </h3>
              <p className="text-brown/80 flex-grow leading-relaxed">
                {service.desc}
              </p>

              <div className="mt-8 pt-4 border-t-2 border-brown/20">
                <a
                  href="#contact"
                  className="font-mono text-sm uppercase font-bold text-teal hover:text-burnt transition-colors inline-flex items-center gap-2"
                >
                  Learn More <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
