import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mic, 
  Plus, 
  AudioWaveform, 
  Clock, 
  Users, 
  CreditCard,
  TrendingUp,
  FileAudio,
  Settings
} from "lucide-react";

const Dashboard = () => {
  // Mock data - would come from API
  const stats = {
    creditsUsed: 12500,
    creditsTotal: 30000,
    projectsCount: 8,
    voicesCloned: 3,
  };

  const recentProjects = [
    {
      id: 1,
      name: "Podcast Episode 12",
      type: "TTS",
      duration: "12:45",
      status: "completed",
      createdAt: "2 hours ago"
    },
    {
      id: 2,
      name: "Marketing Video Dub",
      type: "Voice Clone",
      duration: "3:22",
      status: "processing",
      createdAt: "5 hours ago"
    },
    {
      id: 3,
      name: "Audiobook Chapter 5",
      type: "TTS",
      duration: "28:12",
      status: "completed",
      createdAt: "1 day ago"
    }
  ];

  const creditProgress = (stats.creditsUsed / stats.creditsTotal) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur">
        <div className="container px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back! Here's your AI voice activity.</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
              <Button variant="hero" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                New Project
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Credits Used</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {stats.creditsUsed.toLocaleString()}
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="bg-gradient-primary h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${creditProgress}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground">
                  {stats.creditsTotal.toLocaleString()}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
              <FileAudio className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.projectsCount}</div>
              <p className="text-xs text-muted-foreground">
                +2 from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Voices Cloned</CardTitle>
              <Mic className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.voicesCloned}</div>
              <p className="text-xs text-muted-foreground">
                Professional quality
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Usage Trend</CardTitle>
              <TrendingUp className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+24%</div>
              <p className="text-xs text-muted-foreground">
                vs. last month
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Projects */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Projects</CardTitle>
                <Button variant="outline" size="sm">View All</Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentProjects.map((project) => (
                <div key={project.id} className="flex items-center justify-between p-4 rounded-lg border bg-muted/20">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
                      <AudioWaveform className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">{project.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {project.type} • {project.duration}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge 
                      variant={project.status === 'completed' ? 'default' : 'secondary'}
                      className={project.status === 'completed' ? 'bg-success' : ''}
                    >
                      {project.status}
                    </Badge>
                    <div className="text-sm text-muted-foreground">
                      {project.createdAt}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="hero" className="w-full justify-start" size="lg">
                <Mic className="mr-3 h-5 w-5" />
                Clone Voice
              </Button>
              <Button variant="outline" className="w-full justify-start" size="lg">
                <AudioWaveform className="mr-3 h-5 w-5" />
                Text to Speech
              </Button>
              <Button variant="outline" className="w-full justify-start" size="lg">
                <FileAudio className="mr-3 h-5 w-5" />
                Speech to Text
              </Button>
              <Button variant="outline" className="w-full justify-start" size="lg">
                <Users className="mr-3 h-5 w-5" />
                Conversational AI
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Usage Analytics */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Usage Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Analytics dashboard would show usage charts and insights here</p>
                <p className="text-sm">Connect to your analytics service to view detailed metrics</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;