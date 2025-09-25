import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code2 } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with Java Spring Boot and React, featuring user authentication, payment integration, and admin dashboard.",
      technologies: ["Java", "Spring Boot", "React", "MySQL", "REST API"],
      status: "completed",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Task Management System",
      description: "A collaborative task management web application with real-time updates, built using Python Django and JavaScript for seamless user experience.",
      technologies: ["Python", "Django", "JavaScript", "PostgreSQL", "WebSocket"],
      status: "completed", 
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather dashboard that displays real-time weather data with beautiful visualizations using vanilla JavaScript and CSS animations.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Weather API", "Chart.js"],
      status: "completed",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Portfolio Analytics",
      description: "A data analytics dashboard for tracking portfolio performance using Python for data processing and web technologies for visualization.",
      technologies: ["Python", "Pandas", "JavaScript", "D3.js", "Flask"],
      status: "in-progress",
      githubUrl: "#",
      liveUrl: null
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and passion for development
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="p-6 shadow-elegant border-border/50 hover:shadow-accent hover:border-primary/30 transition-smooth group animate-scale-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-smooth">
                      <Code2 className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                  </div>
                  <Badge 
                    variant={project.status === 'completed' ? 'default' : 'secondary'}
                    className={project.status === 'completed' 
                      ? 'bg-gradient-primary text-primary-foreground' 
                      : 'bg-accent/20 text-accent-foreground'
                    }
                  >
                    {project.status === 'completed' ? 'Completed' : 'In Progress'}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="border-border hover:border-primary/50 hover:bg-primary/10 transition-smooth"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button 
                      variant="default"
                      size="sm"
                      className="bg-gradient-primary hover:shadow-glow transition-smooth"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;