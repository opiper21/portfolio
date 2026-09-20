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
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase font-bold text-cream/60">
                    Email
                  </p>
                  href="mailto:olapiper223@gmail.com"
                  <p className="text-cream font-bold">olapiper223@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-mustard border-4 border-brown flex items-center justify-center shadow-retro-sm">
                  <span className="text-xl">💼</span>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase font-bold text-cream/60">
                    LinkedIn
                  </p>
                  <p className="text-cream font-bold">/in/yourname</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-mustard border-4 border-brown flex items-center justify-center shadow-retro-sm">
                  <span className="text-xl">📍</span>
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
