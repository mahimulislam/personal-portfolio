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
        "Led the technical evolution of the Digital Factory Marketplace, architecting a high-performance Next.js frontend deployed on AWS ECS/Fargate and ensuring high availability in a multi-tenant manufacturing ecosystem",
        "Built the connective tissue between the marketplace and a robust Odoo ERP backend with Python and OWL, automating the manufacturing lifecycle from AI-driven client onboarding and factory bidding to shop-floor R&D and delivery",
        "Designed and maintained 7+ custom Odoo modules spanning CRM, Sales, Inventory, Project, MRP, and Manufacturing to eliminate manual handoffs and standardize global garment production",
        "Developed a full manufacturing shop-floor interface that embeds CAD/Excalidraw assets, instructions, attachments, and operation-specific logic to deliver predictable execution and data capture",
        "Instrumented an AI-powered quoting, onboarding, and knowledge chatbot using NLP models to surface ERP data, accelerate decisions, and augment support for operations teams",
        "Deployed an internal financial modeling dashboard for margin planning, capacity simulation, and sensitivity analysis to inform strategic bidding and funding conversations",
        "Integrated factory bidding workflows, CAD storage, and quality checkpoints so vendors across the platform can collaborate on R&D requests, prototyping, and delivery tracking",
        "Maintained CI/CD pipelines, observability, and monitoring so the platform meets SLAs, supports global operations, and stays ready for scaling",
        "Instrumental in securing a $3M venture investment and positioning Maeknit for global operational scale through automation and resilient infrastructure",
        "Daily focus: 80% hands-on feature development, 20% planning/testing, pairing closely with leadership on product direction and compliance",
      ],
      technologies: [
        "Next.js",
        "React.js",
        "Python",
        "OWL",
        "JavaScript",
        "TypeScript",
        "AWS ECS/Fargate",
        "Docker",
        "Odoo",
        "PostgreSQL",
        "Redis",
        "GitLab CI/CD",
      ],
    },
    {
      title: "Full Stack Engineer",
      company: "Genome Medical Inc.",
      location: "South San Francisco, CA",
      duration: "Aug 2022 – Jan 2025",
      type: "Full-time",
      website: "https://genomemedical.com",
      achievements: [
        "Architected a large-scale patient data migration portal that enabled Genome Medical to securely transfer clinical records with zero data loss and 100% HIPAA compliance",
        "Automated high-volume clinical transfers between Genome Medical and GeneMatters using secure Node.js and Python APIs, eliminating manual intervention in sensitive workflows",
        "Delivered a React.js + Redux-powered one-click migration UI that simplified operator tasks while preserving audit trails and encryption requirements",
        "Built scalable cloud infrastructure (AWS EC2/S3/RDS) and Docker deployments to keep mission-critical applications highly available for providers and clinicians",
        "Maintained 24/7 operational readiness by resolving production incidents, providing timely support, and keeping SLAs intact for healthcare customers",
        "Strengthened platform resilience by contributing to vulnerability management, incident analysis, and remediation coordination with the security team",
        "Collaborated across product, design, and engineering to enhance a Vue.js admin portal that streamlined partner onboarding, provider credentialing, and data operations",
        "Implemented CI/CD pipelines via GitLab and Bitbucket to automate testing and deployments, accelerating releases while keeping compliance controls intact",
        "Authored automated test suites (Mocha, Jest, Selenium, Cypress) to guard against regression bugs and to enable smoother deployments for clinical products",
        "Drove agile rituals (planning, refinement, retrospectives) and maintained documentation to keep the team aligned on delivery of high-impact features",
      ],
      technologies: [
        "React.js",
        "Vue.js",
        "TypeScript",
        "JavaScript",
        "Python",
        "Flask",
        "Node.js",
        "AWS",
        "Docker",
        "PostgreSQL",
        "GitLab CI/CD",
        "Bitbucket Pipelines",
        "Redux",
        "Mocha",
        "Jest",
        "Selenium",
        "Cypress",
      ],
    },
    {
      title: "Software Developer",
      company: "Cardinal Selling Services",
      location: "Huntingburg, IN",
      duration: "Jul 2014 – Jan 2021, Feb 2022 – Aug 2022",
      type: "Part-time",
      website: "https://shopcardinal.com",
      achievements: [
        "Developed websites and web services using REST-based web services and tools including HTML, CSS, Bootstrap, JavaScript, and Django",
        "Conducted user requirement analysis and designed the Entity Relationship Diagram (ERD)",
        "Conducted integration and unit testing using automated testing frameworks including Mocha, Jest, Selenium, and Cypress",
        "Improved product scraping systems using Python and its libraries",
        "Implemented automation to streamline manual processes, resulting in cost savings for the company",
        "Provided support for email marketing initiatives",
        "Used Linux / command line and modern software development practices (git, pull-requests, Jira) to advance software projects",
        "Worked with relational database design, SQL, and PostgreSQL",
        "Built high-scale APIs that operate on AWS, using tools including React.js, TypeScript, Node.js, and Docker",
      ],
      technologies: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "Django",
        "Python",
        "React.js",
        "TypeScript",
        "Node.js",
        "Docker",
        "PostgreSQL",
        "AWS",
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

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-foreground">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
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
      </div>
    </section>
  )
}

export default Experience
