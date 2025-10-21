import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative gradient-subtle overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
      
      <div className="container mx-auto px-6 text-center relative z-10 animate-fade-in">
        <div className="animate-scale-in mb-8">
          <Avatar className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 ring-4 ring-primary/20 shadow-glow">
            <AvatarImage src="/placeholder.svg" alt="Nikunj Kapil" />
            <AvatarFallback className="text-3xl font-bold bg-gradient-primary text-white">NK</AvatarFallback>
          </Avatar>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Nikunj Kapil
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-muted-foreground">
            Software Developer
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-foreground/80">
            Crafting elegant solutions with Java, Python, JavaScript, HTML & CSS. 
            Passionate about building innovative software that makes a difference.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up">
          <Button 
            variant="default" 
            size="lg"
            className="bg-gradient-primary hover:shadow-glow transition-smooth"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-6 animate-slide-up">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:shadow-accent transition-smooth"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:shadow-accent transition-smooth"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:contact@nikunjkapil.com"
            className="p-3 rounded-full border border-border hover:border-primary hover:shadow-accent transition-smooth"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <ArrowDown 
          className="w-6 h-6 text-muted-foreground cursor-pointer hover:text-primary transition-smooth"
          onClick={() => scrollToSection('about')}
        />
      </div>
    </section>
  );
};

export default HeroSection;