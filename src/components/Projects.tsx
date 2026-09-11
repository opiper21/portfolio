function Projects() {
  const projects = [
    {
      id: "01",
      title: "E-Commerce Platform",
      category: "Full Stack",
      desc: "A modern online store with Stripe integration, admin dashboard, and real-time inventory.",
      tech: ["React", "Node.js", "MongoDB"],
      color: "bg-burnt",
    },
    {
      id: "02",
      title: "Task Management App",
      category: "Frontend",
      desc: "A drag-and-drop productivity tool with offline support and team collaboration features.",
      tech: ["React", "TypeScript", "Tailwind"],
      color: "bg-teal",
    },
    {
      id: "03",
      title: "Analytics Dashboard",
      category: "Full Stack",
      desc: "Real-time data visualization platform handling millions of data points with interactive charts.",
      tech: ["Next.js", "PostgreSQL", "Chart.js"],
      color: "bg-mustard",
    },
    {
      id: "04",
      title: "Social Media App",
      category: "Full Stack",
      desc: "A community platform with real-time messaging, notifications, and image uploads.",
      tech: ["React", "Firebase", "Socket.io"],
      color: "bg-brown",
    },
  ];

  return (
    <section
      id="projects"
      className="reveal relative bg-cream py-24 border-t-4 border-brown"
    >
      <div className="absolute inset-0 retro-grid pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3 h-3 rounded-full bg-burnt"></span>
              <span className="font-mono text-sm uppercase tracking-wider font-bold text-burnt">
                Selected Work
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl uppercase text-brown leading-none">
              Recent <span className="text-burnt">Projects</span>
            </h2>
          </div>
          <p className="text-brown/70 max-w-md font-mono text-sm">
            A collection of projects showcasing my skills across the full stack
            — from pixel-perfect frontends to scalable backends.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-cream border-4 border-brown shadow-retro hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Project Image/Color Block */}
              <div
                className={`relative ${project.color} h-56 border-b-4 border-brown flex items-center justify-center overflow-hidden`}
              >
                <span className="font-display text-8xl text-cream/30 absolute top-4 right-4">
                  {project.id}
                </span>
                <span className="font-display text-2xl uppercase text-cream/80 relative z-10 px-4 text-center">
                  {project.title}
                </span>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-brown/0 group-hover:bg-brown/90 transition-all duration-300 flex items-center justify-center">
                  <span className="font-display uppercase text-cream text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    View Project →
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs uppercase font-bold text-teal">
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-brown/50">
                    {project.id}/04
                  </span>
                </div>

                <h3 className="font-display text-2xl uppercase text-brown mb-3">
                  {project.title}
                </h3>

                <p className="text-brown/70 leading-relaxed mb-4">
                  {project.desc}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs uppercase px-3 py-1 border-2 border-brown text-brown"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-transparent text-brown font-display uppercase text-sm px-10 py-5 border-4 border-brown shadow-retro hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 transition-all duration-200"
          >
            See All Projects
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
