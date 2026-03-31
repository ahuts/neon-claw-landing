import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center pt-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-crab-red/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-6">
              OPENCLAW SKILLS & AUTOMATION
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
              Automate your
              <span className="text-crab-red text-glow-red"> workflow.</span>
              <br />
              <span className="text-primary text-glow-yellow">Scale your output.</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-lg mb-8 leading-relaxed">
              Premium OpenClaw skills, automation blueprints, and AI-powered tools. 
              Build once, run forever. Each skill pays for itself on the first use.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="font-semibold gap-2 text-base"
                onClick={scrollToProducts}
              >
                Browse Skills <ArrowRight size={18} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="font-semibold text-base"
                onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              🔧 Built for OpenClaw · 🤖 AI-Powered · 📦 Instant Delivery
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-full max-w-md lg:max-w-lg rounded-2xl bg-card border border-border p-8 animate-float">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-4 border-b border-border">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold">⚡</span>
                    </div>
                    <div>
                      <p className="font-semibold">Automation Ready</p>
                      <p className="text-xs text-muted-foreground">Plug-and-play OpenClaw skills</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-green-500">✓</span>
                      <span>Job Research & Ghost Detection</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-green-500">✓</span>
                      <span>Lead Capture & Conversion</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-green-500">✓</span>
                      <span>AI Content & Voice Agents</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-primary">10+ Skills Available</p>
                    <p className="text-xs text-muted-foreground mt-1">From $19 - $39 one-time</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
