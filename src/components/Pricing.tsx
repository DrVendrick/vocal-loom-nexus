import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "month",
      credits: "10k credits/month",
      popular: false,
      features: [
        "Text-to-Speech",
        "Speech-to-Text", 
        "Basic Studio access",
        "Conversational AI trial",
        "API access (low concurrency)",
        "Community support",
      ]
    },
    {
      name: "Starter", 
      price: "$5",
      period: "month",
      credits: "30k credits/month",
      popular: true,
      features: [
        "Everything in Free",
        "Commercial license",
        "Instant voice cloning",
        "Dubbing Studio",
        "20 Studio projects",
        "Music for social/ads",
        "Email support",
      ]
    },
    {
      name: "Creator",
      price: "$11", 
      period: "month",
      credits: "100k credits/month",
      popular: false,
      features: [
        "Everything in Starter",
        "Professional voice cloning",
        "Usage-based billing for extras",
        "Higher quality audio (192 kbps)",
        "Advanced export options",
        "Priority support",
      ]
    },
    {
      name: "Pro",
      price: "$99",
      period: "month", 
      credits: "500k credits/month",
      popular: false,
      features: [
        "Everything in Creator",
        "44.1kHz PCM API output",
        "Higher concurrency",
        "Advanced Studio features",
        "Team collaboration",
        "Phone support",
      ]
    },
    {
      name: "Scale",
      price: "$330",
      period: "month",
      credits: "2M credits/month + 3 seats",
      popular: false,
      features: [
        "Everything in Pro", 
        "Multi-seat workspace",
        "Team admin controls",
        "Elevated concurrency",
        "Custom integrations",
        "Dedicated success manager",
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      credits: "Custom credits & seats", 
      popular: false,
      features: [
        "Custom volume pricing",
        "HIPAA BAA compliance",
        "SSO & SCIM",
        "Audit logs",
        "Custom SLAs",
        "White-label options",
        "24/7 dedicated support",
      ]
    }
  ];

  return (
    <section className="py-24" id="pricing">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Simple, Transparent{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your voice AI needs. All plans include our core features 
            with scalable usage and advanced capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {plans.slice(0, 3).map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-elegant' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">{plan.credits}</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/signup" className="block">
                  <Button 
                    variant={plan.popular ? "gradient" : "outline"} 
                    className="w-full"
                    size="lg"
                  >
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enterprise Plans */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.slice(3).map((plan, index) => (
            <Card key={index} className="bg-gradient-card">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period !== "pricing" && (
                      <span className="text-muted-foreground">/{plan.period}</span>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">{plan.credits}</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to={plan.name === "Enterprise" ? "/contact" : "/signup"} className="block">
                  <Button variant="premium" className="w-full" size="lg">
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include a 7-day free trial. No credit card required.{" "}
            <Link to="/faq" className="text-primary hover:underline">
              View FAQ
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;