import { Github, ExternalLink, Code, Database, Cloud, Calendar, Badge as BadgeIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "SAMI (Social Agent Mediated Interactions)",
      description: "SAMI is a social AI actor designed to enhance students' social presence in online classrooms by encouraging peer connections based on shared identity, developed by AI-ALOE and the Design Intelligence Lab. Successfully deployed in multiple online classrooms at Georgia Institute of Technology, demonstrating measurable improvements in student interaction and collaborative learning.",
      tech: ["Python", "Neo4j", "Docker", "AWS", "OpenAI API"],
      category: "AI/ML Research",
      icon: <Code className="h-6 w-6" />,
      highlights: ["AI-powered student matching", "Graph database modeling", "Deployed at Georgia Tech", "Measurable learning improvements"],
      status: "Active Project",
      period: "Aug 2024 – Present"
    },
    {
      title: "Maeknit ERP System",
      description: "Designed and developed 5+ custom Odoo ERP modules across CRM, Inventory, Sales, Project, Contacts, and Email to automate internal operations for garment industry workflows. Built dynamic financial modeling dashboard with margin planning and machine capacity analysis.",
      tech: ["Python", "OWL", "JavaScript", "XML", "PostgreSQL", "Odoo.sh"],
      category: "Enterprise Software",
      icon: <Database className="h-6 w-6" />,
      highlights: ["5+ custom ERP modules", "Financial modeling dashboard", "Garment industry automation", "Full-stack development"],
      status: "Current Work",
      period: "Mar 2025 – Present"
    },
    {
      title: "Genome Medical Patient Migration",
      description: "Developed an end-to-end solution for seamless patient migration between Genome Medical and GeneMatters platforms. Designed secure APIs and integrated with Node.js and Python-based systems, ensuring HIPAA-compliant data transfer with a React.js + Redux-powered one-click UI.",
      tech: ["Node.js", "Python", "AWS", "React.js", "Redux", "FHIR", "HL7", "Flask"],
      category: "Healthcare",
      icon: <Database className="h-6 w-6" />,
      highlights: ["HIPAA-compliant", "Automated data transfer", "One-click UI", "100% secure migration"],
      status: "Completed",
      period: "2022-2025"
    },
    {
      title: "Cardinal's E-commerce Platform Revamp",
      description: "Revamped the e-commerce website for Cardinal Selling Services. Enhanced UI/UX, improved performance, and integrated BigCommerce APIs for optimized product management, boosting operational efficiency and customer experience. Built automated scraping system reducing manual time from 5 minutes to 1 second per product.",
      tech: ["React.js", "Node.js", "BigCommerce API", "Django", "Selenium", "PostgreSQL", "AWS"],
      category: "E-commerce",
      icon: <Code className="h-6 w-6" />,
      link: "https://shopcardinal.com",
      highlights: ["99.8% time reduction", "Modern UI/UX", "Automated scraping", "API integration"],
      status: "Completed",
      period: "2014-2021"
    },
    {
      title: "Hybrid Text Summarizer for Bangla Documents",
      description: "Developed an NLP-based hybrid text summarizer that combines extractive and abstractive methods to improve Bangla text processing. Published research in the International Journal of Computer Vision and Signal Processing (IJCVSP), Vol 10, No. 1.",
      tech: ["Python", "NLTK", "TensorFlow", "Transformers", "Scikit-learn"],
      category: "Research",
      icon: <Database className="h-6 w-6" />,
      highlights: ["Published research", "Novel algorithm", "Bangla NLP", "First author"],
      status: "Published",
      period: "2019-2020"
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "AI/ML Research": "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
      "Enterprise Software": "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
      Healthcare: "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400",
      "E-commerce": "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
      Research: "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400",
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const getStatusColor = (status: string) => {
    const colors = {
      "Active Project": "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
      "Current Work": "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
      "Completed": "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400",
      "Published": "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400",
    };
    return colors[status as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions across healthcare, e-commerce, enterprise software, and AI research that drive real impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="shadow-elegant hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group h-full"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                      {project.icon}
                    </div>
                    <div className="space-y-2">
                      <Badge className={getCategoryColor(project.category)}>
                        {project.category}
                      </Badge>
                      <Badge variant="outline" className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  
                  {project.link && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      asChild
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View project"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>

                <div className="space-y-2">
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </CardTitle>
                  
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{project.period}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Key Highlights</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {tech}
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
            <Github className="h-4 w-4" />
            <span>More projects available on my GitHub</span>
            <Button variant="link" className="p-0 h-auto" asChild>
              <a
                href="https://github.com/mahimulislam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80"
              >
                github.com/mahimulislam
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;