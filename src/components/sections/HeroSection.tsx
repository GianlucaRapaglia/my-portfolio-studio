import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style intro */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <code className="font-mono text-sm text-muted-foreground">
              ~/gianluca-rapaglia
            </code>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="text-foreground">Gianluca</span>
            <br />
            <span className="text-gradient">Rapaglia</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary font-mono mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Applied AI Engineer
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Building practical AI solutions for real-world challenges in industry, 
            energy systems, automation, and mobility, focused on reliability, 
            performance, and measurable impact.
          </p>
          
          {/* Social links */}
          <div className="flex items-center justify-center gap-4 mb-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button variant="outline" size="icon" className="glass hover:glow-sm transition-all" asChild>
              <a href="https://github.com/GianlucaRapaglia" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="glass hover:glow-sm transition-all" asChild>
              <a href="https://www.linkedin.com/in/gianluca-rapaglia-a9089a218" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="glass hover:glow-sm transition-all" asChild>
              <a href="mailto:rapaglia.gianluca@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" className="glow hover:scale-105 transition-transform" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" className="glass" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm font-mono">scroll</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
