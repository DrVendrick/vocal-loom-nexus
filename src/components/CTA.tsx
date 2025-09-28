import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-20" />
      
      <div className="container px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Ready to Transform Your{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Voice Experience?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of creators, businesses, and developers who trust VoiceForge 
              for their AI voice needs. Start your free trial today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/signup">
              <Button variant="gradient" size="xl" className="w-full sm:w-auto">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/demo">
              <Button variant="outline" size="xl" className="w-full sm:w-auto">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">7 Days</div>
              <div className="text-muted-foreground">Free Trial</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">No Setup</div>
              <div className="text-muted-foreground">Start Immediately</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Cancel Anytime</div>
              <div className="text-muted-foreground">Full Control</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;