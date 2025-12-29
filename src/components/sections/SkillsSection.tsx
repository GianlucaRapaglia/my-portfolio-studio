const skills = {
  "Programming": ["Python", "C++", "Matlab", "Simulink", "ROS", "Linux"],
  "Machine Learning": ["Neural Networks", "PyTorch", "Predictive Modeling", "Reinforcement Learning", "Supervised & Unsupervised Learning"],
  "Control & Optimization": ["Model Predictive Control", "Real-Time Embedded Control", "Physics-Guided ML"],
  "MLOps & Tools": ["MLflow", "DVC", "Hydra", "CUDA", "GPU Computing"],
  "Domains": ["Industrial AI", "HVAC & Energy Systems", "Robotics", "Simulation & Training", "Mobility Optimization"]
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-6">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              <span className="font-mono text-sm text-primary">Tech Stack</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building AI-powered systems from research to production.
            </p>
          </div>
          
          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <div
                key={category}
                className="glass rounded-xl p-6 gradient-border hover:glow-sm transition-all opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-primary mb-4 font-mono">
                  {`// ${category}`}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-secondary/50 text-foreground rounded-md hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
