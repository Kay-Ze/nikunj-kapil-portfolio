import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1"></div>
          <div className="text-center">
            <span className="text-sm text-muted-foreground">
              © 2024 Nikunj Kapil. All rights reserved.
            </span>
          </div>
          <div className="flex-1 flex justify-end">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full border border-border hover:border-primary hover:shadow-accent transition-smooth"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
