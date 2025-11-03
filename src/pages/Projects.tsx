import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Briefcase, Plus, Building2, Calendar, DollarSign, Clock, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const mockProjects = [
  {
    id: "1",
    title: "Full Stack Web Development Intern",
    company: "TechCorp Solutions",
    description: "Join our engineering team to build scalable web applications using React, Node.js, and PostgreSQL. You'll work on real-world projects that impact millions of users.",
    requirements: "Strong knowledge of JavaScript/TypeScript, React, Node.js. Familiar with Git and agile methodologies.",
    duration: "3 months",
    stipend: 5000,
    start_date: "2025-01-15",
    status: "open",
  },
  {
    id: "2",
    title: "Data Science Intern",
    company: "DataFlow Analytics",
    description: "Work with our data science team on machine learning projects, data visualization, and predictive analytics using Python and TensorFlow.",
    requirements: "Python, Pandas, NumPy, Machine Learning basics. Statistics knowledge is a plus.",
    duration: "4 months",
    stipend: 6000,
    start_date: "2025-02-01",
    status: "open",
  },
  {
    id: "3",
    title: "Cloud Infrastructure Intern",
    company: "CloudNine Systems",
    description: "Learn about cloud architecture, DevOps practices, and infrastructure as code while working with AWS, Docker, and Kubernetes.",
    requirements: "Basic understanding of Linux, networking, and cloud concepts. AWS certification is beneficial.",
    duration: "3 months",
    stipend: 5500,
    start_date: "2025-01-20",
    status: "open",
  },
  {
    id: "4",
    title: "Cybersecurity Analyst Intern",
    company: "CyberGuard Security",
    description: "Assist in threat detection, security audits, and vulnerability assessments. Gain hands-on experience with security tools and frameworks.",
    requirements: "Understanding of networking, security fundamentals, and ethical hacking concepts.",
    duration: "6 months",
    stipend: 7000,
    start_date: "2025-02-15",
    status: "open",
  },
];

const Projects = () => {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [projects, setProjects] = useState(mockProjects);
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    description: "",
    requirements: "",
    duration: "",
    stipend: "",
    start_date: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProject = {
      id: String(projects.length + 1),
      company: formData.company,
      title: formData.title,
      description: formData.description,
      requirements: formData.requirements,
      duration: formData.duration,
      stipend: parseFloat(formData.stipend),
      start_date: formData.start_date,
      status: "open" as const,
    };
    setProjects([newProject, ...projects]);
    toast({
      title: "Success!",
      description: "Internship posted successfully.",
    });
    setIsDialogOpen(false);
    setFormData({
      company: "",
      title: "",
      description: "",
      requirements: "",
      duration: "",
      stipend: "",
      start_date: "",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open": return "bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-700 dark:text-green-400 border-green-500/30";
      case "closed": return "bg-gradient-to-r from-gray-500/20 to-gray-600/20 text-gray-700 dark:text-gray-400 border-gray-500/30";
      case "filled": return "bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-700 dark:text-blue-400 border-blue-500/30";
      default: return "";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8 animate-fade-in">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Virtual Internships
            </h1>
            <p className="text-muted-foreground text-lg">Explore exciting opportunities to kickstart your career</p>
          </div>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2 hover:scale-105 transition-transform shadow-lg">
                <Plus className="h-4 w-4" />
                Post Internship
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Post New Internship</DialogTitle>
                <DialogDescription>
                  Create a new internship opportunity.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name *</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="title">Position Title *</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Software Development Intern"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    rows={4}
                    placeholder="Describe the internship role and responsibilities"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="requirements">Requirements</Label>
                  <Textarea
                    id="requirements"
                    rows={3}
                    placeholder="List the required skills and qualifications"
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration</Label>
                    <Input
                      id="duration"
                      placeholder="e.g., 3 months"
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="stipend">Stipend ($)</Label>
                    <Input
                      id="stipend"
                      type="number"
                      step="0.01"
                      placeholder="e.g., 5000"
                      value={formData.stipend}
                      onChange={(e) => setFormData({ ...formData, stipend: e.target.value })}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="start_date">Start Date</Label>
                  <Input
                    id="start_date"
                    type="date"
                    value={formData.start_date}
                    onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Post Internship
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50 animate-fade-in bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <Briefcase className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-1">
                          <Building2 className="h-4 w-4" />
                          {project.company}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className={`${getStatusColor(project.status)} font-semibold px-4 py-1`}>
                        <Sparkles className="h-3 w-3 mr-1" />
                        {project.status.toUpperCase()}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed">{project.description}</p>
                
                {project.requirements && (
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-primary" />
                      Requirements
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.requirements}</p>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-6 text-sm">
                  {project.duration && (
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="font-medium">{project.duration}</span>
                    </div>
                  )}
                  {project.stipend && (
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/10 border border-secondary/20">
                      <DollarSign className="h-4 w-4 text-secondary" />
                      <span className="font-medium">${project.stipend.toLocaleString()}</span>
                    </div>
                  )}
                  {project.start_date && (
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 border border-accent/20">
                      <Calendar className="h-4 w-4 text-accent" />
                      <span className="font-medium">{new Date(project.start_date).toLocaleDateString()}</span>
                    </div>
                  )}
                </div>

                <Button className="w-full mt-4 hover:scale-105 transition-transform shadow-lg">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
