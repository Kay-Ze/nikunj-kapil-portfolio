import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen flex items-center justify-center relative gradient-subtle overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{
      backgroundImage: `url(${heroBg})`
    }} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
      
      <div className="container mx-auto px-6 relative z-10 animate-fade-in">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 min-h-[80vh]">
          {/* Avatar on the left */}
          <div className="animate-scale-in">
            <Avatar className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 ring-4 ring-primary/20 shadow-glow">
              <AvatarImage src="/placeholder.svg" alt="Nikunj Kapil" />
              <AvatarFallback className="text-5xl md:text-6xl font-bold bg-gradient-primary text-white">NK</AvatarFallback>
            </Avatar>
          </div>

          {/* Content on the right */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Nikunj Kapil
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-muted-foreground">
              Software Developer
            </h2>
            <p className="text-lg md:text-xl mb-12 text-foreground/80">Aspiring Software Developer with a strong interest in cybersecurity. Seeking an internship to leverage my skills in full-stack development and secure coding practices to contribute to building safe, robust, and reliable systems.</p>
            
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-12 animate-slide-up">
              <Button variant="default" size="lg" className="bg-gradient-primary hover:shadow-glow transition-smooth" onClick={() => scrollToSection('projects')}>
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-6 animate-slide-up">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border hover:border-primary hover:shadow-accent transition-smooth">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border hover:border-primary hover:shadow-accent transition-smooth">
                <Linkedin className="w-6 h-6" />
              </a>
              
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-float">
        <ArrowDown className="w-6 h-6 text-muted-foreground cursor-pointer hover:text-primary transition-smooth" onClick={() => scrollToSection('about')} />
      </div>
    </section>;
};
export default HeroSection;