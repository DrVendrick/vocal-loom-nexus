import { Card, CardContent } from "@/components/ui/card";
import { 
  Mic, 
  Globe, 
  AudioWaveform, 
  Video, 
  Bot, 
  FileAudio, 
  Music, 
  Code,
  Shield,
  Zap
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Mic,
      title: "Voice Cloning",
      description: "Clone any voice with just a few seconds of audio. Instant cloning for quick results or professional cloning for premium quality.",
    },
    {
      icon: Globe,
      title: "32+ Languages",
      description: "Generate speech in over 32 languages with native-level pronunciation and cultural nuances.",
    },
    {
      icon: AudioWaveform,
      title: "Studio Editor",
      description: "Professional multi-track editor with timeline, import/export, batch processing, and version history.",
    },
    {
      icon: Video,
      title: "Dubbing Studio",
      description: "Upload videos and create automated lip-sync dubbing with subtitle support and per-segment voice assignment.",
    },
    {
      icon: Bot,
      title: "Conversational AI",
      description: "Build voice-powered chatbots with persistent context and integrate webchat widgets into your websites.",
    },
    {
      icon: FileAudio,
      title: "Speech-to-Text",
      description: "High-accuracy transcription with punctuation, speaker identification, and downloadable transcripts.",
    },
    {
      icon: Music,
      title: "Music & SFX",
      description: "Access royalty-free music generation and mixing tools for social media ads and content creation.",
    },
    {
      icon: Code,
      title: "API & SDKs",
      description: "Comprehensive REST API with JavaScript and Python SDKs for seamless integration into your applications.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "End-to-end encryption, HIPAA compliance options, SSO, audit logs, and enterprise-grade security features.",
    },
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm">
            <Zap className="mr-2 h-4 w-4 text-primary" />
            Powerful Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Everything You Need for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Voice AI
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From voice cloning to conversational AI, our comprehensive platform provides 
            all the tools you need to create amazing voice experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 bg-gradient-card border-0">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;