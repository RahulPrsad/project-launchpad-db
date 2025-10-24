import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Users, Send } from "lucide-react";

const Apply = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
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

  const { data: projects } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*, companies(name)")
        .eq("status", "open");
      if (error) throw error;
      return data;
    },
  });

  const applyMutation = useMutation({
    mutationFn: async () => {
      // First, check if student exists
      let studentId;
      const { data: existingStudent } = await supabase
        .from("students")
        .select("id")
        .eq("email", studentData.email)
        .maybeSingle();
      
      if (existingStudent) {
        studentId = existingStudent.id;
        // Update student info
        await supabase
          .from("students")
          .update({
            ...studentData,
            graduation_year: parseInt(studentData.graduation_year),
          })
          .eq("id", studentId);
      } else {
        // Create new student
        const { data: newStudent, error: studentError } = await supabase
          .from("students")
          .insert([{
            ...studentData,
            graduation_year: parseInt(studentData.graduation_year),
          }])
          .select()
          .single();
        
        if (studentError) throw studentError;
        studentId = newStudent.id;
      }
      
      // Create application
      const { data, error } = await supabase
        .from("applications")
        .insert([{
          student_id: studentId,
          project_id: applicationData.project_id,
          cover_letter: applicationData.cover_letter,
        }])
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["applications"] });
      toast({
        title: "Application Submitted!",
        description: "Your application has been submitted successfully.",
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
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    applyMutation.mutate();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Apply for Internship
            </h1>
            <p className="text-muted-foreground">Fill in your details and submit your application</p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Application Form
              </CardTitle>
              <CardDescription>
                Complete the form below to apply for an internship position
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Personal Information</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={studentData.name}
                      onChange={(e) => setStudentData({ ...studentData, name: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={studentData.email}
                        onChange={(e) => setStudentData({ ...studentData, email: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={studentData.phone}
                        onChange={(e) => setStudentData({ ...studentData, phone: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Academic Information</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="university">University *</Label>
                    <Input
                      id="university"
                      value={studentData.university}
                      onChange={(e) => setStudentData({ ...studentData, university: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="degree">Degree *</Label>
                      <Input
                        id="degree"
                        placeholder="e.g., B.Tech Computer Science"
                        value={studentData.degree}
                        onChange={(e) => setStudentData({ ...studentData, degree: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="graduation_year">Graduation Year *</Label>
                      <Input
                        id="graduation_year"
                        type="number"
                        min="2020"
                        max="2030"
                        value={studentData.graduation_year}
                        onChange={(e) => setStudentData({ ...studentData, graduation_year: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Application Details</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="project">Select Internship *</Label>
                    <Select
                      value={applicationData.project_id}
                      onValueChange={(value) => setApplicationData({ ...applicationData, project_id: value })}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Choose an internship position" />
                      </SelectTrigger>
                      <SelectContent>
                        {projects?.map((project) => (
                          <SelectItem key={project.id} value={project.id}>
                            {project.title} - {project.companies?.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cover_letter">Cover Letter</Label>
                    <Textarea
                      id="cover_letter"
                      rows={6}
                      placeholder="Tell us why you're interested in this internship..."
                      value={applicationData.cover_letter}
                      onChange={(e) => setApplicationData({ ...applicationData, cover_letter: e.target.value })}
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full gap-2" 
                  size="lg"
                  disabled={applyMutation.isPending}
                >
                  <Send className="h-4 w-4" />
                  {applyMutation.isPending ? "Submitting..." : "Submit Application"}
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