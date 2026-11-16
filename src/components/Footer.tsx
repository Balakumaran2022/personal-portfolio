const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/80 bg-background/50">
      <div className="container px-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-heading font-bold text-base text-foreground">
              Bala Kumaran M
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Building scalable, high-performance web applications.
            </p>
          </div>

          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Bala Kumaran M. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
