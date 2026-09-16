function Projects() {
  // ========================================
  // 📦 YOUR PROJECTS DATA
  // Edit this array whenever you have new projects
  // ========================================
  const projects = [
    {
      id: "01",
      title: "Ledgerly — Fintech Dashboard",
      category: "UI Design",
      problem:
        "Fintech products need clean dashboards that make complex data feel simple.",
      solution:
        "Designed a modern dashboard in Figma with metrics, charts, and an insights panel.",
      outcome:
        "A production-ready design system ready to be built into a live React app.",
      tech: ["Figma", "UI Design", "Dashboard"],
      color: "bg-burnt",
      link: "https://github.com/opiper21",
    },
    {
      id: "02",
      title: "Task Management App",
      category: "Frontend",
      problem: "Remote teams struggled to coordinate tasks across time zones.",
      solution:
        "Built a drag-and-drop dashboard with real-time sync and offline support.",
      outcome: "Adopted by 30+ teams; reduced status meetings by 50%.",
      tech: ["React", "TypeScript", "Tailwind"],
      color: "bg-teal",
      link: "https://github.com/opiper21",
    },
    {
      id: "03",
      title: "Analytics Dashboard",
      category: "Full Stack",
      problem:
        "A marketing agency wasted hours manually compiling client reports.",
      solution:
        "Built a real-time dashboard pulling from 5 data sources with export features.",
      outcome:
        "Saved the team 15 hours per week; reports went from weekly to live.",
      tech: ["Next.js", "PostgreSQL", "Chart.js"],
      color: "bg-mustard",
      link: "https://github.com/opiper21",
    },
    {
      id: "04",
      title: "Social Media App",
      category: "Full Stack",
      problem:
        "A niche community had no home after their old platform shut down.",
      solution:
        "Shipped a full social app with real-time chat, notifications, and image uploads in 6 weeks.",
      outcome:
        "Onboarded 2,000 users in month one with 40% daily active usage.",
      tech: ["React", "Firebase", "Socket.io"],
      color: "bg-brown",
      link: "https://github.com/opiper21",
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
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-cream border-4 border-brown shadow-retro hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden block"
            >
              {/* Header */}
              <div
                className={`relative ${project.color} h-40 border-b-4 border-brown flex items-center justify-center overflow-hidden`}
              >
                <span className="font-display text-7xl text-cream/30 absolute top-4 right-4">
                  {project.id}
                </span>
                <span className="font-display text-xl md:text-2xl uppercase text-cream/90 relative z-10 px-4 text-center">
                  {project.title}
                </span>
                <div className="absolute inset-0 bg-brown/0 group-hover:bg-brown/90 transition-all duration-300 flex items-center justify-center">
                  <span className="font-display uppercase text-cream text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    View Project →
                  </span>
                </div>
              </div>

              {/* Case Study Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs uppercase font-bold text-teal">
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-brown/50">
                    {project.id}/0{projects.length}
                  </span>
                </div>

                {/* Problem → Solution → Outcome */}
                <div className="space-y-4 mb-5">
                  <div>
                    <p className="font-mono text-[10px] uppercase font-bold text-burnt mb-1">
                      ▸ Problem
                    </p>
                    <p className="text-sm text-brown/80 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase font-bold text-teal mb-1">
                      ▸ Solution
                    </p>
                    <p className="text-sm text-brown/80 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase font-bold text-brown mb-1">
                      ▸ Outcome
                    </p>
                    <p className="text-sm text-brown font-semibold leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-brown/20">
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
            </a>
          ))}
        </div>

        {/* View All Button — FIXED */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/opiper21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-transparent text-brown font-display uppercase text-sm px-10 py-5 border-4 border-brown shadow-retro hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 transition-all duration-200"
          >
            See All Projects on GitHub
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
