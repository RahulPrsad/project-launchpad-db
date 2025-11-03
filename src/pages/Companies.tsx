import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Building2, Plus, ExternalLink, MapPin, Briefcase } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const mockCompanies = [
  {
    id: "1",
    name: "TechCorp Solutions",
    industry: "Software Development",
    location: "San Francisco, CA",
    description: "Leading provider of cloud-based enterprise solutions with a focus on AI and machine learning.",
    website: "https://techcorp.example.com",
  },
  {
    id: "2",
    name: "DataFlow Analytics",
    industry: "Data Science",
    location: "New York, NY",
    description: "Pioneering data analytics company helping businesses make informed decisions through big data.",
    website: "https://dataflow.example.com",
  },
  {
    id: "3",
    name: "CloudNine Systems",
    industry: "Cloud Computing",
    location: "Seattle, WA",
    description: "Infrastructure as a service provider specializing in scalable cloud solutions for startups.",
    website: "https://cloudnine.example.com",
  },
  {
    id: "4",
    name: "CyberGuard Security",
    industry: "Cybersecurity",
    location: "Austin, TX",
    description: "Next-generation cybersecurity firm protecting digital assets with advanced threat detection.",
    website: "https://cyberguard.example.com",
  },
];

const Companies = () => {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [companies, setCompanies] = useState(mockCompanies);
  const [formData, setFormData] = useState({
    name: "",
    industry: "",
    location: "",
    description: "",
    website: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCompany = {
      id: String(companies.length + 1),
      ...formData,
    };
    setCompanies([newCompany, ...companies]);
    toast({
      title: "Success!",
      description: "Company added successfully.",
    });
    setIsDialogOpen(false);
    setFormData({ name: "", industry: "", location: "", description: "", website: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8 animate-fade-in">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Partner Companies
            </h1>
            <p className="text-muted-foreground text-lg">Discover leading companies offering virtual internships</p>
          </div>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2 hover:scale-105 transition-transform shadow-lg">
                <Plus className="h-4 w-4" />
                Add Company
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Company</DialogTitle>
                <DialogDescription>
                  Fill in the company details below.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Company Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry *</Label>
                  <Input
                    id="industry"
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    type="url"
                    placeholder="https://example.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Add Company
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {companies.map((company, index) => (
            <Card 
              key={company.id} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 animate-fade-in bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Building2 className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {company.name}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <Briefcase className="h-3 w-3" />
                        {company.industry}
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  {company.location}
                </p>
                {company.description && (
                  <p className="text-sm line-clamp-3 leading-relaxed">{company.description}</p>
                )}
                {company.website && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    asChild 
                    className="gap-2 w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <a href={company.website} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Visit Website
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Companies;
