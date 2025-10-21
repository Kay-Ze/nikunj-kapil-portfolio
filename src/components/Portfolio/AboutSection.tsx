import { Card } from "@/components/ui/card";
const AboutSection = () => {
  return <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <Card className="p-8 shadow-elegant border-border/50 hover:shadow-accent transition-smooth">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-foreground/90">I'm a passionate Software Developer with a strong focus on cybersecurity. I love creating secure, robust, and efficient solutions that solve real-world problems and protect critical data.</p>
                <p className="text-lg leading-relaxed text-foreground/90">With a strong foundation in full-stack development, I understand how to embed security into every layer of an application, from the frontend interface to the backend database.</p>
                <p className="text-lg leading-relaxed text-foreground/90">When I'm not coding, you can find me researching the latest security vulnerabilities, exploring threat detection tools, or contributing to open-source security projects.</p>
              </div>
            </Card>
          </div>
          
          <div className="animate-slide-up space-y-6">
            <h3 className="text-2xl font-semibold mb-8 text-center">Core Values</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 group">
                <div className="w-3 h-3 bg-gradient-primary rounded-full mt-2 group-hover:shadow-glow transition-smooth"></div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Secure Code</h4>
                  <p className="text-muted-foreground">Writing code that is not only maintainable and efficient, but also resilient against common vulnerabilities and follows secure coding best practices.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-3 h-3 bg-gradient-primary rounded-full mt-2 group-hover:shadow-glow transition-smooth"></div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Continuous Learning</h4>
                  <p className="text-muted-foreground">Staying updated with the fast-evolving threat landscape, new security tools, and best practices in defensive software development.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-3 h-3 bg-gradient-primary rounded-full mt-2 group-hover:shadow-glow transition-smooth"></div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Problem Solving</h4>
                  <p className="text-muted-foreground">Approaching challenges with a security-first mindset and analytical thinking to find optimal, secure, and scalable solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;