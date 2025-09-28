import { Button } from "@/components/ui/button";
import { Play, AudioWaveform, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-voice-ai.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-accent/20 to-primary/5 pt-20 pb-32">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-gradient-hero rounded-full blur-3xl opacity-15" />
      
      <div className="container relative px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm">
                <Zap className="mr-2 h-4 w-4 text-primary" />
                AI-Powered Voice Technology
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Create Ultra-Realistic{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  AI Voices
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Transform text into human-like speech with our advanced AI platform. 
                Clone voices instantly, create multilingual content, and build conversational AI experiences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <Button variant="gradient" size="xl" className="w-full sm:w-auto">
                  <Play className="mr-2 h-5 w-5" />
                  Start Creating Free
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  <AudioWaveform className="mr-2 h-5 w-5" />
                  Try Demo
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold">32+ Languages</div>
                  <div className="text-sm text-muted-foreground">Multilingual support</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
                  <AudioWaveform className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Voice Cloning</div>
                  <div className="text-sm text-muted-foreground">Instant & Professional</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Low Latency</div>
                  <div className="text-sm text-muted-foreground">Ultra-fast generation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="AI Voice Technology Platform" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-card rounded-lg shadow-card p-4 border backdrop-blur-sm">
              <div className="text-sm font-medium">Generation Speed</div>
              <div className="text-2xl font-bold text-primary">0.3s</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card rounded-lg shadow-card p-4 border backdrop-blur-sm">
              <div className="text-sm font-medium">Voice Quality</div>
              <div className="text-2xl font-bold text-success">99.8%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;