import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-6">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              <span className="font-mono text-sm text-primary">Contact</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Interested in working together or just want to say hello? 
              I'd love to hear from you.
            </p>
          </div>
          
          {/* Contact card */}
          <div className="glass rounded-2xl p-8 md:p-12 gradient-border glow">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left side - CTA */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                <p className="text-muted-foreground mb-6">
                  Whether you have a project in mind or just want to connect, 
                  I'm always open to new conversations.
                </p>
                <Button size="lg" className="glow hover:scale-105 transition-transform" asChild>
                  <a href="mailto:rapaglia.gianluca@gmail.com">
                    <Mail className="h-5 w-5 mr-2" />
                    Send Email
                  </a>
                </Button>
              </div>
              
              {/* Right side - Links */}
              <div className="space-y-4">
                <a
                  href="mailto:rapaglia.gianluca@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-mono text-sm truncate">rapaglia.gianluca@gmail.com</div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                </a>
                
                <a
                  href="https://github.com/GianlucaRapaglia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-muted-foreground">GitHub</div>
                    <div className="font-mono text-sm truncate">github.com/GianlucaRapaglia</div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                </a>
                
                <a
                  href="https://www.linkedin.com/in/gianluca-rapaglia-a9089a218"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-muted-foreground">LinkedIn</div>
                    <div className="font-mono text-sm truncate">Gianluca Rapaglia</div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                </a>
                
                <a
                  href="https://kaggle.com/gianlucarapaglia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20">
                    <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.071.305z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-muted-foreground">Kaggle</div>
                    <div className="font-mono text-sm truncate">gianlucarapaglia</div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
