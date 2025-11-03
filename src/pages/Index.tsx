import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Briefcase, Users, ArrowRight, CheckCircle2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-muted/30 to-background py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Your Gateway to{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Virtual Internships
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect students with leading companies. Explore opportunities, manage applications, 
              and launch your career in tech.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" className="gap-2">
                <Link to="/projects">
                  Browse Internships
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/apply">
                  <Users className="h-4 w-4" />
                  Apply Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Complete Internship Management</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to connect companies, projects, and aspiring professionals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary transition-colors duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Company Profiles</CardTitle>
                <CardDescription>
                  Browse and manage company information, including industry, location, and opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="ghost" className="w-full">
                  <Link to="/companies">View Companies</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-colors duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-secondary-foreground" />
                </div>
                <CardTitle>Internship Projects</CardTitle>
                <CardDescription>
                  Discover virtual internship opportunities with detailed descriptions and requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="ghost" className="w-full">
                  <Link to="/projects">Explore Projects</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-accent to-secondary flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Easy Applications</CardTitle>
                <CardDescription>
                  Submit your profile and applications seamlessly with our streamlined process
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="ghost" className="w-full">
                  <Link to="/apply">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-2 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-lg font-semibold">Companies</div>
              <p className="text-sm text-muted-foreground">Top tech companies offering internships</p>
            </div>
            <div className="text-center space-y-2 p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                1000+
              </div>
              <div className="text-lg font-semibold">Opportunities</div>
              <p className="text-sm text-muted-foreground">Virtual internship positions available</p>
            </div>
            <div className="text-center space-y-2 p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                5000+
              </div>
              <div className="text-lg font-semibold">Students</div>
              <p className="text-sm text-muted-foreground">Successfully placed in internships</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join our platform today and discover amazing internship opportunities
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" className="gap-2">
              <Link to="/projects">
                View Openings
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link to="/companies">
                <Building2 className="h-4 w-4" />
                Browse Companies
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
