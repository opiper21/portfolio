import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mqpkjwjl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: "", email: "", message: "" });
        }, 3000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="reveal relative bg-teal py-24 border-t-4 border-brown"
    >
      <div className="absolute inset-0 retro-grid pointer-events-none opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Call to Action */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3 h-3 rounded-full bg-mustard animate-pulse"></span>
              <span className="font-mono text-sm uppercase tracking-wider font-bold text-mustard">
                Let's Work Together
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-6xl uppercase text-cream leading-none mb-6">
              Got a project
              <br />
              <span className="text-mustard">in mind?</span>
            </h2>

            <p className="text-cream/80 text-lg mb-8 leading-relaxed max-w-md">
              Whether it's a new website, an app, or a full-scale platform — I'm
              ready to bring your ideas to life. Let's build something great
              together.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-mustard border-4 border-brown flex items-center justify-center shadow-retro-sm">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="w-5 h-5 text-brown fill-current"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase font-bold text-cream/60">
                    Email
                  </p>
                  <a href="mailto:olapiper223@gmail.com" className="text-cream font-bold hover:text-mustard transition-colors">
                    olapiper223@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-mustard border-4 border-brown flex items-center justify-center shadow-retro-sm">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="w-5 h-5 text-brown fill-current"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase font-bold text-cream/60">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/in/sodiqolabode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream font-bold hover:text-mustard transition-colors"
                  >
                    /in/sodiqolabode
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-mustard border-4 border-brown flex items-center justify-center shadow-retro-sm">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="w-5 h-5 text-brown fill-current"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase font-bold text-cream/60">
                    X (Twitter)
                  </p>
                  <a
                    href="https://x.com/OlabodePiper"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream font-bold hover:text-mustard transition-colors"
                  >
                    @OlabodePiper
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-mustard border-4 border-brown flex items-center justify-center shadow-retro-sm">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="w-5 h-5 text-brown fill-current"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase font-bold text-cream/60">
                    Location
                  </p>
                  <p className="text-cream font-bold">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-cream border-4 border-brown shadow-retro p-8">
            {submitted ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="font-display text-2xl uppercase text-brown mb-2">
                  Message Sent!
                </h3>
                <p className="text-brown/70 font-mono text-sm">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-mono text-xs uppercase font-bold text-brown block mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-transparent border-4 border-brown px-4 py-3 font-sans text-brown placeholder:text-brown/30 focus:outline-none focus:bg-mustard/20 transition-colors"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs uppercase font-bold text-brown block mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-4 border-brown px-4 py-3 font-sans text-brown placeholder:text-brown/30 focus:outline-none focus:bg-mustard/20 transition-colors"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs uppercase font-bold text-brown block mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-transparent border-4 border-brown px-4 py-3 font-sans text-brown placeholder:text-brown/30 focus:outline-none focus:bg-mustard/20 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-burnt text-cream font-display uppercase text-sm px-8 py-4 border-4 border-brown shadow-retro hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 transition-all duration-200 cursor-pointer"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
