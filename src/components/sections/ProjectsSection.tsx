import { Award, ExternalLink, Factory, Bot, TrafficCone } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI-Driven HVAC Optimization",
    description: "Developed predictive ML models and AI control strategies to improve HVAC energy efficiency and automation. Designed physics-guided neural controllers and accelerated development using GPU computing and MLOps.",
    technologies: ["PyTorch", "Neural Networks", "MLflow", "DVC", "CUDA", "MPC"],
    type: "Industrial R&D",
    icon: Factory,
    highlight: null,
    link: null
  },
  {
    title: "Autonomous EV Charging Robot",
    description: "Built software and control logic for an automated EV charging system using a robotic arm. Implemented ML-based object detection and smooth motion planning in ROS and C++.",
    technologies: ["ROS", "Python", "C++", "Machine Learning", "Motion Planning"],
    type: "Robotics",
    icon: Bot,
    highlight: "Awarded Ingegnere Bertelè Prize",
    link: null
  },
  {
    title: "SnAIke — Smart Traffic Lights",
    description: "Developed a Reinforcement Learning solution to optimize traffic flow using SUMO simulation, combining engineering, applied AI, and entrepreneurship.",
    technologies: ["Python", "Reinforcement Learning", "SUMO", "Linux"],
    type: "AI Startup",
    icon: TrafficCone,
    highlight: "Selected for Plug & Play + Politecnico di Torino accelerator",
    link: "https://snaike-ai.com"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-6">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              <span className="font-mono text-sm text-primary">Portfolio</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world AI solutions with measurable impact across industries.
            </p>
          </div>
          
          {/* Projects grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.title}
                  className="glass rounded-2xl overflow-hidden gradient-border hover:glow transition-all group opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Project header */}
                  <div className="p-6 border-b border-border/50">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-xs font-mono text-muted-foreground px-3 py-1 rounded-full bg-secondary/50">
                        {project.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Project body */}
                  <div className="p-6">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-mono bg-secondary/50 text-muted-foreground rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Highlight badge */}
                    {project.highlight && (
                      <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/10 border border-primary/20 mb-4">
                        <Award className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-primary">{project.highlight}</span>
                      </div>
                    )}
                    
                    {/* Link */}
                    {project.link && (
                      <Button variant="outline" size="sm" className="w-full glass" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          Visit Project
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
