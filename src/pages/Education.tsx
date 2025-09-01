import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const education = [
    {
      degree: "M.S. in Computer Science",
      institution: "Georgia Institute of Technology",
      status: "In Progress",
      gpa: "3.7/4.0",
      specialization: "Interactive Intelligence",
      period: "Jan 2024 - Dec 2025 (Expected)",
      location: "Atlanta, GA",
      type: "Graduate",
      courses: [
        "Machine Learning",
        "Computer Vision", 
        "Natural Language Processing",
        "Software Engineering",
        "Database Systems",
        "Human-Computer Interaction"
      ],
      achievements: [
        "Dean's List recognition",
        "Graduate Research Assistant",
        "Active in AI/ML research projects (SAMI)"
      ]
    },
    {
      degree: "B.Sc. in Computer Science and Engineering",
      institution: "Ahsanullah University of Science and Technology",
      status: "Graduated",
      gpa: "3.43/4.0",
      thesis: "Hybrid Text Summarization for Bangla Documents",
      period: "Nov 2015 - Feb 2020",
      location: "Dhaka, Bangladesh",
      type: "Undergraduate",
      courses: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Management",
        "Operating Systems",
        "Computer Networks",
        "Artificial Intelligence"
      ],
      achievements: [
        "Published research in International Journal of Computer Vision and Signal Processing",
        "Outstanding academic performance",
        "Active member of programming club"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-primary bg-clip-text text-transparent">
              Education
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and academic excellence in computer science and technology
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="shadow-elegant hover:shadow-lg transition-all duration-300 hover:scale-[1.01] group"
            >
              <CardHeader className="space-y-4">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <Badge 
                        variant={edu.status === "In Progress" ? "default" : "secondary"}
                        className={edu.status === "In Progress" ? "gradient-primary" : ""}
                      >
                        {edu.status}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-200">
                      {edu.degree}
                    </CardTitle>
                    
                    <p className="text-lg font-semibold text-muted-foreground">
                      {edu.institution}
                    </p>
                  </div>
                  
                  <div className="space-y-2 lg:text-right">
                    <div className="flex items-center space-x-2 text-muted-foreground lg:justify-end">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">{edu.period}</span>
                    </div>
                    <p className="text-muted-foreground">{edu.location}</p>
                    <Badge variant="outline">{edu.type}</Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Award className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Academic Performance</h4>
                    </div>
                    <div className="space-y-2 ml-7">
                      <p className="text-muted-foreground">
                        <span className="font-medium">GPA:</span> {edu.gpa}
                      </p>
                      {edu.specialization && (
                        <p className="text-muted-foreground">
                          <span className="font-medium">Specialization:</span> {edu.specialization}
                        </p>
                      )}
                      {edu.thesis && (
                        <p className="text-muted-foreground">
                          <span className="font-medium">Thesis:</span> {edu.thesis}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Key Achievements</h4>
                    </div>
                    <ul className="space-y-1 ml-7">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Relevant Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course) => (
                      <Badge 
                        key={course} 
                        variant="outline" 
                        className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-muted-foreground">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
            <span className="font-medium">Currently pursuing advanced studies in AI and Machine Learning</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;