import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Globe, Layers } from "lucide-react";
const SkillsSection = () => {
  const skillCategories = [{
    title: "Programming Languages",
    icon: Code2,
    skills: ["Java", "Python", "JavaScript", "SQL"],
    description: "Core programming languages I use to build robust applications"
  }, {
    title: "Full Stack Technologies",
    icon: Globe,
    skills: ["HTML", "Tailwind CSS", "Node.js", "React.js", "Express.js", "JWT"],
    description: "Creating engaging and responsive user interfaces"
  }, {
    title: "Database Systems",
    icon: Database,
    skills: ["SQL", "MySQL", "MongoDB"],
    description: "Managing and designing database solutions"
  }, {
    title: "Developer Tools",
    icon: Layers,
    skills: ["Git", "GitHub", "IntelliJ", "PyCharm", "VS Code"],
    description: "Essential tools for development and version control"
  }];
  return <section id="skills" className="py-20 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => <Card key={category.title} className="p-6 shadow-elegant border-border/50 hover:shadow-accent hover:border-primary/30 transition-smooth group animate-scale-in" style={{
          animationDelay: `${index * 150}ms`
        }}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-smooth">
                  <category.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                  {category.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map(skill => <Badge key={skill} variant="secondary" className="bg-secondary/50 hover:bg-gradient-primary hover:text-primary-foreground transition-smooth cursor-default">
                      {skill}
                    </Badge>)}
                </div>
              </div>
            </Card>)}
        </div>
        
        
      </div>
    </section>;
};
export default SkillsSection;
