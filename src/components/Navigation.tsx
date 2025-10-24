import { Link, useLocation } from "react-router-dom";
import { Building2, Briefcase, Users, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Briefcase className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              InternHub
            </span>
          </Link>
          
          <div className="flex items-center gap-2">
            <Button
              variant={isActive("/") ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link to="/" className="gap-2">
                <Home className="h-4 w-4" />
                <span className="hidden sm:inline">Home</span>
              </Link>
            </Button>
            
            <Button
              variant={isActive("/companies") ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link to="/companies" className="gap-2">
                <Building2 className="h-4 w-4" />
                <span className="hidden sm:inline">Companies</span>
              </Link>
            </Button>
            
            <Button
              variant={isActive("/projects") ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link to="/projects" className="gap-2">
                <Briefcase className="h-4 w-4" />
                <span className="hidden sm:inline">Internships</span>
              </Link>
            </Button>
            
            <Button
              variant={isActive("/apply") ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link to="/apply" className="gap-2">
                <Users className="h-4 w-4" />
                <span className="hidden sm:inline">Apply</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;