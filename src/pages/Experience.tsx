import { Calendar, MapPin, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Experience = () => {
  const jobs = [
    {
      title: "Full Stack Software Engineer",
      company: "Maeknit, Inc.",
      location: "Jamaica, NY",
      duration: "Mar 2025 – Present",
      type: "Full-time",
      website: "https://maeknit.com",
      achievements: [
        "Architected a B2B Manufacturing Marketplace using Next.js and PostgreSQL (Amazon RDS), deployed on AWS ECS with Fargate for serverless container orchestration.",
        "Engineered an AI-driven Onboarding Suite that summarizes client meetings and generates automated project proposals, streamlining communication via SendGrid and an AI-powered “project chatter.”",
        "Developed a Factory Quotation System allowing admins to broadcast requirements to vendors and receive live, competitive quotes based on baseline manufacturing standards.",
        "Designed a Seamless Odoo-to-Portal Bridge, routing marketplace orders into an ERP pipeline covering CRM, Sales, R&D, and Manufacturing (MRP) for end-to-end traceability.",
        "Sole Software Engineer owning end-to-end execution, scaling the platform to secure a $3M venture investment while managing two-week Agile sprints with the CTO and CEO.",
        "Built 7+ Custom Odoo Modules using Python, OWL, and JavaScript to automate fashion-specific logic, including yarn orchestration and BOM management.",
        "Architected a Financial Modeling Dashboard for margin planning and capacity simulation, improving executive decision-making speed.",
      ],
      technologies:
        "Python, OWL, JavaScript/TypeScript, Next.js, React.js, AWS (ECS, Fargate, RDS), PostgreSQL, Docker, SendGrid API, Excalidraw, AI Agents.",
    },
    {
      title: "Full Stack Engineer",
      company: "Genome Medical Inc.",
      location: "South San Francisco, CA",
      duration: "Aug 2022 – Jan 2025",
      type: "Full-time",
      website: "https://genomemedical.com",
      achievements: [
        "Delivered mission-critical healthcare systems with 100% on-time releases, maintaining high availability for regulated clinical platforms.",
        "Enabled secure patient data migration between Genome Medical and GeneMatters, ensuring HIPAA compliance and zero data loss.",
        "Improved platform security by resolving 50+ critical vulnerabilities, resulting in a 30% increase in system robustness.",
        "Accelerated product delivery velocity through CI/CD automation, reducing release cycles by 20%.",
        "Architected cloud-based backend systems using AWS (EC2, S3, RDS) and Docker, leveraging Flask, Node.js, and PostgreSQL.",
        "Designed a patient migration platform using secure APIs and a React.js + Redux one-click UI to automate data transfers.",
        "Built automated testing frameworks using Mocha, Jest, Selenium, and Cypress, reducing production bugs by 40%.",
        "Provided production support at scale, resolving 150+ support tickets within six months while maintaining system stability.",
      ],
      technologies: "React.js, Vue.js, TypeScript, Python (Flask), Node.js, GitLab CI/CD, Bitbucket Pipelines, AWS, Docker, PostgreSQL.",
    },
    {
      title: "Software Developer (Part-time)",
      company: "Cardinal Selling Services",
      location: "Huntingburg, IN",
      duration: "Jul 2014 – Jan 2021, Feb 2022 – Aug 2022",
      type: "Part-time",
      website: "https://shopcardinal.com",
      achievements: [
        "Developed web services using REST APIs, HTML, CSS, Bootstrap, and Django.",
        "Architected high-scale APIs deployed on AWS, leveraging Node.js, TypeScript, and Docker for high-concurrency traffic.",
        "Optimized product scraping engines using Python, significantly increasing data ingestion rates and accuracy.",
        "Engineered automated test suites using Jest and Selenium, reducing regression bugs and increasing deployment velocity.",
        "Led ERD design and schema optimization for PostgreSQL databases, ensuring query performance for complex datasets.",
        "Automated manual processes, reducing operational overhead and driving measurable cost savings.",
      ],
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Professional <span className="gradient-primary bg-clip-text text-transparent">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building scalable solutions and leading impactful projects in healthcare and e-commerce
          </p>
        </div>

        <div className="space-y-8">
          {jobs.map((job, index) => (
            <Card
              key={index}
              className="shadow-elegant hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group"
            >
              <CardHeader className="space-y-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-200">
                      {job.title}
                    </CardTitle>
                    <div className="flex items-center space-x-2 text-lg font-semibold text-muted-foreground">
                      <span>{job.company}</span>
                      {job.website && (
                        <a
                          href={job.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center hover:text-primary transition-colors duration-200"
                        >
                          <ExternalLink className="h-4 w-4 ml-1" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2 lg:text-right">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">{job.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <Badge variant="secondary">{job.type}</Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-foreground">Key Achievements</h4>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {job.technologies && (
                  <div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Technologies:</span> {job.technologies}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
