import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
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
                <p className="text-lg leading-relaxed text-foreground/90">
                  I'm a passionate Software Developer with expertise in multiple programming languages 
                  and technologies. I love creating efficient, scalable solutions that solve real-world problems.
                </p>
                <p className="text-lg leading-relaxed text-foreground/90">
                  With a strong foundation in both frontend and backend development, I enjoy working 
                  on diverse projects that challenge me to grow and learn new technologies.
                </p>
                <p className="text-lg leading-relaxed text-foreground/90">
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </Card>
          </div>
          
          <div className="animate-slide-up space-y-6">
            <h3 className="text-2xl font-semibold mb-8 text-center">Core Values</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 group">
                <div className="w-3 h-3 bg-gradient-primary rounded-full mt-2 group-hover:shadow-glow transition-smooth"></div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Clean Code</h4>
                  <p className="text-muted-foreground">Writing maintainable, readable, and efficient code that stands the test of time.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-3 h-3 bg-gradient-primary rounded-full mt-2 group-hover:shadow-glow transition-smooth"></div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Continuous Learning</h4>
                  <p className="text-muted-foreground">Staying updated with latest technologies and best practices in software development.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-3 h-3 bg-gradient-primary rounded-full mt-2 group-hover:shadow-glow transition-smooth"></div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Problem Solving</h4>
                  <p className="text-muted-foreground">Approaching challenges with creativity and analytical thinking to find optimal solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;