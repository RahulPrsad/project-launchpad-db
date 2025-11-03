import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Users, Send, CheckCircle2, Sparkles } from "lucide-react";

const mockProjects = [
  { id: "1", title: "Full Stack Web Development Intern", company: "TechCorp Solutions" },
  { id: "2", title: "Data Science Intern", company: "DataFlow Analytics" },
  { id: "3", title: "Cloud Infrastructure Intern", company: "CloudNine Systems" },
  { id: "4", title: "Cybersecurity Analyst Intern", company: "CyberGuard Security" },
];

const Apply = () => {
  const { toast } = useToast();
  
  const [studentData, setStudentData] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    degree: "",
    graduation_year: "",
  });
  
  const [applicationData, setApplicationData] = useState({
    project_id: "",
    cover_letter: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Your application has been received. We'll get back to you soon!",
    });
    setStudentData({
      name: "",
      email: "",
      phone: "",
      university: "",
      degree: "",
      graduation_year: "",
    });
    setApplicationData({
      project_id: "",
      cover_letter: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Apply for Internship
            </h1>
            <p className="text-muted-foreground text-lg">Take the first step towards your dream career</p>
          </div>
          
          <Card className="border-2 hover:border-primary/50 transition-colors shadow-2xl animate-fade-in bg-card/50 backdrop-blur-sm">
            <CardHeader className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Application Form</CardTitle>
                  <CardDescription className="text-base">
                    Complete all sections to submit your application
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-4 p-6 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    Personal Information
                  </h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base">Full Name *</Label>
                    <Input
                      id="name"
                      className="h-11"
                      value={studentData.name}
                      onChange={(e) => setStudentData({ ...studentData, name: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        className="h-11"
                        value={studentData.email}
                        onChange={(e) => setStudentData({ ...studentData, email: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-base">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        className="h-11"
                        value={studentData.phone}
                        onChange={(e) => setStudentData({ ...studentData, phone: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Academic Information */}
                <div className="space-y-4 p-6 rounded-xl bg-gradient-to-br from-secondary/5 to-accent/5 border border-secondary/20">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                    Academic Information
                  </h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="university" className="text-base">University *</Label>
                    <Input
                      id="university"
                      className="h-11"
                      value={studentData.university}
                      onChange={(e) => setStudentData({ ...studentData, university: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="degree" className="text-base">Degree *</Label>
                      <Input
                        id="degree"
                        placeholder="e.g., B.Tech Computer Science"
                        className="h-11"
                        value={studentData.degree}
                        onChange={(e) => setStudentData({ ...studentData, degree: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="graduation_year" className="text-base">Graduation Year *</Label>
                      <Input
                        id="graduation_year"
                        type="number"
                        min="2020"
                        max="2030"
                        className="h-11"
                        value={studentData.graduation_year}
                        onChange={(e) => setStudentData({ ...studentData, graduation_year: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                </div>
                
                {/* Application Details */}
                <div className="space-y-4 p-6 rounded-xl bg-gradient-to-br from-accent/5 to-primary/5 border border-accent/20">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Send className="h-5 w-5 text-accent" />
                    Application Details
                  </h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="project" className="text-base">Select Internship *</Label>
                    <Select
                      value={applicationData.project_id}
                      onValueChange={(value) => setApplicationData({ ...applicationData, project_id: value })}
                      required
                    >
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Choose an internship position" />
                      </SelectTrigger>
                      <SelectContent>
                        {mockProjects.map((project) => (
                          <SelectItem key={project.id} value={project.id}>
                            {project.title} - {project.company}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cover_letter" className="text-base">Cover Letter</Label>
                    <Textarea
                      id="cover_letter"
                      rows={6}
                      placeholder="Tell us why you're interested in this internship and what makes you a great fit..."
                      className="resize-none"
                      value={applicationData.cover_letter}
                      onChange={(e) => setApplicationData({ ...applicationData, cover_letter: e.target.value })}
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full gap-2 h-12 text-base hover:scale-105 transition-transform shadow-lg"
                  size="lg"
                >
                  <Send className="h-5 w-5" />
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Apply;
