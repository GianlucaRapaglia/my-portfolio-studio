const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="font-mono text-lg font-bold">
            <span className="text-primary">&lt;</span>
            GR
            <span className="text-primary">/&gt;</span>
          </a>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Gianluca Rapaglia. Built with passion and caffeine.
          </p>
          
          {/* Made with */}
          <p className="text-sm text-muted-foreground font-mono">
            <span className="text-primary">$</span> echo "Forza Juve! ⚫⚪"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
