import { Brain, Cpu, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - About text */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-6">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span className="font-mono text-sm text-primary">About Me</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Engineering AI for
                <span className="text-gradient"> Real Impact</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm an Applied AI Engineer with a strong background in Mechatronics, 
                Robotics, and Control Systems. I build practical AI solutions for 
                real-world challenges in industry, energy systems, automation, and mobility.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                My focus is always on reliability, performance, and measurable impact. 
                Outside of engineering, I love football (Forza Juventus! ⚫⚪), 
                surfing, and snowboarding — staying curious, active, and always learning.
              </p>
              
              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="glass rounded-lg p-4 text-center gradient-border">
                  <div className="text-3xl font-bold text-primary mb-1">3+</div>
                  <div className="text-sm text-muted-foreground">Years Exp.</div>
                </div>
                <div className="glass rounded-lg p-4 text-center gradient-border">
                  <div className="text-3xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="glass rounded-lg p-4 text-center gradient-border">
                  <div className="text-3xl font-bold text-primary mb-1">1</div>
                  <div className="text-sm text-muted-foreground">Award</div>
                </div>
              </div>
            </div>
            
            {/* Right side - Focus areas */}
            <div className="space-y-6">
              <div className="glass rounded-xl p-6 gradient-border hover:glow-sm transition-all group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
                    <p className="text-muted-foreground">
                      Neural Networks, PyTorch, Predictive Modeling, Reinforcement Learning, 
                      Transformers, and Physics-Guided ML approaches.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass rounded-xl p-6 gradient-border hover:glow-sm transition-all group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Cpu className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Control Systems</h3>
                    <p className="text-muted-foreground">
                      Model Predictive Control (MPC), Real-Time Embedded Control, 
                      ROS, and advanced optimization techniques.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass rounded-xl p-6 gradient-border hover:glow-sm transition-all group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">MLOps & Engineering</h3>
                    <p className="text-muted-foreground">
                      MLflow, DVC, Hydra, CUDA, GPU Computing — building 
                      production-ready AI systems that scale.
                    </p>
                  </div>
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
