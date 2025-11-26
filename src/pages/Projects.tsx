import { Github, ExternalLink, Code, Database, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const Projects = () => {
  const projects = [
    {
      title: "SAMI (Social Agent Mediated Interactions)",
      description:
        "Contributing to the development of SAMI, an AI social agent deployed in Georgia Tech's OMSCS program for ten semesters and serving over 11,000 students, helping them build social connections through shared interests and identity markers. Co-designed and implemented SAMI's two-level metacognitive self-adaptation architecture, integrating Knowledge-Based AI with LLMs to correct ChatGPT-induced errors and improve interpretability.",
      tech: ["Python", "Neo4j", "LangChain", "OpenAI", "Docker", "AWS"],
      category: "AI/ML Research",
      icon: <Code className="h-6 w-6" />,
      highlights: [
        "Two-level metacognitive architecture",
        "Task-Method-Knowledge self-model",
        "Neo4j knowledge graphs integration",
        "Real-world deployment to 500+ students",
      ],
      status: "Active Project",
      period: "Aug 2024 – Present",
    },
    {
      title: "Maeknit ERP System",
      description:
        "Built the company's end-to-end business workflow in Odoo, enabling seamless progression from Website Lead Generation through CRM Pipeline, Sales Orders, R&D, Manufacturing Shopfloor, and Delivery. Developed a full MFG shopfloor interface using OWL with integrated instructions, CADs, attachments, progress tracking, and operation-specific logic.",
      tech: ["Python", "OWL", "JavaScript", "XML", "PostgreSQL", "Odoo.sh"],
      category: "Enterprise Software",
      icon: <Database className="h-6 w-6" />,
      highlights: [
        "7+ custom Odoo modules",
        "Full MFG shopfloor interface",
        "Excalidraw integration for R&D",
        "End-to-end business workflow",
      ],
      status: "Current Work",
      period: "Mar 2025 – Present",
    },
    {
      title: "Maeknit Website & Financial Dashboard",
      description:
        "Built and launched the company's public-facing website using React.js, Next.js, HTML, CSS, delivering a fully responsive branded experience. Architected and built a financial modeling dashboard for margin planning, capacity simulation, and sensitivity analysis.",
      tech: ["React.js", "Next.js", "HTML", "CSS", "JavaScript"],
      category: "Web Development",
      icon: <Code className="h-6 w-6" />,
      highlights: [
        "Fully responsive design",
        "Financial modeling dashboard",
        "Margin planning tools",
        "Capacity simulation",
      ],
      status: "Current Work",
      period: "Mar 2025 – Present",
    },
    {
      title: "Genome Medical Patient Migration",
      description:
        "Developed an end-to-end solution for seamless patient migration between Genome Medical and GeneMatters platforms. Designed secure APIs and integrated with Node.js and Python-based systems, ensuring HIPAA-compliant data transfer with a React.js + Redux-powered one-click UI.",
      tech: ["Node.js", "Python", "AWS", "React.js", "Redux", "Flask"],
      category: "Healthcare",
      icon: <Database className="h-6 w-6" />,
      highlights: ["HIPAA-compliant", "Automated data transfer", "One-click UI", "100% secure migration"],
      status: "Completed",
      period: "2022-2025",
    },
    {
      title: "Hybrid Text Summarizer for Bangla Documents",
      description:
        "Developed an NLP-based hybrid text summarizer that combines extractive and abstractive methods to improve Bangla text processing. Published research in the International Journal of Computer Vision and Signal Processing (IJCVSP), Vol 10, No. 1.",
      tech: ["Python", "NLTK", "TensorFlow", "Transformers", "Scikit-learn"],
      category: "Research",
      icon: <Database className="h-6 w-6" />,
      highlights: ["Published research", "Novel algorithm", "Bangla NLP", "First author"],
      status: "Published",
      period: "2019-2020",
    },
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      "AI/ML Research": "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
      "Enterprise Software": "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
      Healthcare: "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400",
      "E-commerce": "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
      Research: "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400",
      "Web Development": "bg-teal-100 text-teal-800 dark:bg-teal-900/20 dark:text-teal-400",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  const getStatusColor = (status: string) => {
    const colors = {
      "Active Project": "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
      "Current Work": "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
      Completed: "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400",
      Published: "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400",
    }
    return colors[status as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-primary bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions across healthcare, e-commerce, enterprise software, AI research, and web development
            that drive real impact
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
                      <Badge className={getCategoryColor(project.category)}>{project.category}</Badge>
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
                      <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="View project">
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
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

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
  )
}

export default Projects
