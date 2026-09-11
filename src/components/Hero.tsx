import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative min-h-screen bg-cream overflow-hidden">
            
            {/* Retro Grid Background */}
            <div className="absolute inset-0 retro-grid pointer-events-none"></div>
            
            {/* Decorative Shapes */}
            <div className="absolute top-20 -left-20 w-80 h-80 rounded-full border-4 border-burnt opacity-30"></div>
            <div className="absolute bottom-20 -right-20 w-96 h-96 rounded-full bg-mustard opacity-20"></div>
            <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-teal opacity-40"></div>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-32">
                
                {/* Availability Status */}
                <div className="flex items-center gap-3 mb-8">
                    <span className="w-3 h-3 rounded-full bg-burnt animate-pulse"></span>
                    <span className="font-mono text-sm uppercase tracking-wider font-bold">
                        Available for freelance
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="font-display text-5xl sm:text-7xl lg:text-9xl leading-[0.9] uppercase mb-8 text-brown">
                    Hello, I'm
                    <br />
                    <span className="text-burnt relative inline-block">
                        Sodiq Olabode {/* 👈 REPLACE WITH YOUR NAME LATER */}
                        <span className="absolute bottom-1 left-0 w-full h-4 bg-mustard -z-10"></span>
                    </span>
                </h1>

                {/* Subheading & CTA Grid */}
                <div className="grid md:grid-cols-2 gap-12 items-start mt-12">
                    
                    {/* Left: Bio */}
                    <div>
                        <p className="font-mono text-sm uppercase mb-3 text-teal font-bold">
                            — Full Stack Web Developer
                        </p>
                        <p className="text-lg md:text-xl leading-relaxed max-w-lg text-brown/80">
                            I build <span className="font-semibold bg-burnt text-cream px-2 py-0.5">bold digital experiences</span> 
                            {' '}that help businesses stand out, connect with customers, 
                            and grow faster online.
                        </p>
                    </div>

                    {/* Right: Buttons */}
                    <div className="flex flex-col sm:flex-row md:justify-end gap-4 md:pt-2">
                        <a 
                            href="#projects" 
                            className="group bg-brown text-cream font-display uppercase text-sm px-8 py-4 border-4 border-brown shadow-retro-orange hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 transition-all duration-200 inline-flex items-center justify-center gap-2"
                        >
                            View Work
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                        <a 
                            href="#contact" 
                            className="bg-transparent text-brown font-display uppercase text-sm px-8 py-4 border-4 border-brown hover:bg-brown hover:text-cream transition-all duration-200 inline-flex items-center justify-center shadow-retro-sm hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                        >
                            Get in Touch
                        </a>
                    </div>

                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 pt-10 border-t-4 border-brown">
                    {[
                        { number: '3+', label: 'Years Experience' },
                        { number: '25+', label: 'Projects Done' },
                        { number: '15+', label: 'Happy Clients' },
                        { number: '100%', label: 'Client Focused' },
                    ].map((stat) => (
                        <div key={stat.label}>
                            <p className="font-display text-4xl md:text-5xl text-burnt">{stat.number}</p>
                            <p className="font-mono text-xs uppercase mt-2 font-bold tracking-wider">{stat.label}</p>
                        </div>
                    ))}
                </div>

            </div>

            {/* Retro Marquee Strip (Bottom) */}
            <div className="absolute bottom-0 left-0 w-full bg-brown text-cream py-4 border-y-4 border-brown overflow-hidden flex whitespace-nowrap">
                <div className="flex animate-marquee">
                    {[...Array(6)].map((_, i) => (
                        <span key={i} className="font-display uppercase text-lg mx-8 flex items-center gap-8">
                            <span>★ Available for Projects</span>
                            <span>✦ Full Stack Developer</span>
                            <span>★ Let's Build Something Great</span>
                            <span>✦ Open to Opportunities</span>
                        </span>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Hero;