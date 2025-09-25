import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 text-muted-foreground mb-4 md:mb-0">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse-glow" />
            <span>by Nikunj Kapil</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              © 2024 Nikunj Kapil. All rights reserved.
            </span>
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