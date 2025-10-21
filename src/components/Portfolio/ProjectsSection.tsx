import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code2 } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "ThreatGuard: Browser Extension for Real-Time Web Security",
      description: "Developed a browser extension to proactively detect and block phishing websites, ransomware, and data leaks in real-time. Leveraged Google Safe Browsing and VirusTotal APIs to perform real-time scanning of URLs and files for malicious content detection.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Google Safe Browsing API", "VirusTotal API"],
      status: "completed",
      date: "September 2024",
      isPrivate: true
    },
    {
      title: "Content Recommendation System Using Real-time Face Detection",
      description: "Developed a real-time face detection system to determine user age and filter content accordingly. Implemented machine learning algorithms to classify content and restrict inappropriate material for minors. Integrated with YouTube and Instagram APIs to dynamically control content visibility.",
      technologies: ["Python", "OpenCV", "YouTube Data API", "Instagram Graph API", "Machine Learning"],
      status: "completed", 
      date: "February 2025",
      isPrivate: true
    },
    {
      title: "Firewall System in Python",
      description: "Built a custom firewall system using Python to monitor and control network traffic. Implemented packet filtering, intrusion detection, and logging mechanisms to enhance network security and protect against unauthorized access.",
      technologies: ["Python", "Socket Programming", "Network Security", "Packet Analysis"],
      status: "completed",
      date: "2025",
      isPrivate: true
    },
    {
      title: "E-Learning Platform",
      description: "Developed a comprehensive e-learning platform with course management, video streaming, user progress tracking, and interactive quizzes. Features include user authentication, admin dashboard, and real-time notifications for enhanced learning experience.",
      technologies: ["Java", "Spring Boot", "MySQL", "React", "REST API"],
      status: "completed",
      date: "2025",
      isPrivate: true
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
                <div className="flex items-start justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-smooth">
                      <Code2 className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{project.date}</p>
                    </div>
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
                  <Badge 
                    variant="outline" 
                    className="border-border/50 text-muted-foreground px-3 py-1.5"
                  >
                    <Github className="w-3 h-3 mr-2" />
                    Private Repository
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className="border-border/50 text-muted-foreground px-3 py-1.5"
                  >
                    <ExternalLink className="w-3 h-3 mr-2" />
                    In Development
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            More projects coming soon! Currently working on open-sourcing selected projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;