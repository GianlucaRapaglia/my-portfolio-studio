import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "AI & Controls Engineer",
    company: "Denso Thermal Systems",
    period: "Current",
    description: "Developing AI-driven predictive and control solutions for HVAC systems, implementing ML models, physics-guided AI, MLOps pipelines, and real-time control.",
    current: true
  },
  {
    title: "Systems Engineer",
    company: "Leonardo S.p.A.",
    period: "Previous",
    description: "Worked on simulation and training systems, system integration, and secure operational environments.",
    current: false
  },
  {
    title: "Robotics & AI Engineer (Thesis)",
    company: "InnoTech Systems, CSULA (USA)",
    period: "Thesis Project",
    description: "Built autonomous EV charging robotic system and ML-based control pipeline.",
    current: false
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-6">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              <span className="font-mono text-sm text-primary">Career</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
            
            {/* Experience items */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className="relative pl-20 opacity-0 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-6 top-6 w-4 h-4 rounded-full border-2 border-primary ${exp.current ? 'bg-primary animate-pulse-glow' : 'bg-background'}`} />
                  
                  {/* Content card */}
                  <div className="glass rounded-xl p-6 gradient-border hover:glow-sm transition-all">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-primary">
                          <Briefcase className="h-4 w-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-mono ${exp.current ? 'bg-primary/20 text-primary' : 'bg-secondary text-muted-foreground'}`}>
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
