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
        "Sole software engineer leading full-cycle development in two-week Agile sprints, collaborating directly with the CTO and CEO via Jira and Slack",
        "Built the company's end-to-end business workflow in Odoo, enabling a seamless progression from Website Lead Generation through CRM Pipeline, Sales Orders, R&D, Manufacturing Shopfloor, and Delivery",
        "Designed custom stages, views, and automation rules across CRM, Sales, Inventory, Project, and MRP to eliminate manual handoffs and standardize garment production processes using Python, OWL, JavaScript, XML",
        "Developed a full MFG shopfloor interface using OWL with integrated instructions, CADs, attachments, progress tracking, and operation-specific logic",
        "Created and maintained 7+ custom Odoo modules tailored to fashion manufacturing, including BOM management, yarn orchestration, variant handling, machine settings, and technical documentation",
        "Integrated Excalidraw into Odoo's R&D pipeline, enabling sketching, CAD data storage, and technical documentation directly in BOM Requests and Work Orders",
        "Built and launched the public-facing website using React.js, Next.js, HTML, CSS, delivering a fully responsive branded experience",
        "Architected and built a financial modeling dashboard for margin planning, capacity simulation, and sensitivity analysis using React.js, Next.js, HTML, CSS",
        "Developing an internal AI chatbot using Python and NLP models for quoting, onboarding, and knowledgebase access",
        "Building a factory marketplace platform with a React.js frontend and Python backend integrated with Odoo modules to enable rapid quoting system",
        "Daily responsibilities: 80% hands-on coding and 20% planning/testing using Python, OWL, JavaScript, React.js, XML, PostgreSQL",
      ],
      technologies: [
        "Python",
        "OWL",
        "JavaScript",
        "XML",
        "React.js",
        "Next.js",
        "HTML",
        "CSS",
        "PostgreSQL",
        "Odoo.sh",
        "AWS",
        "Jira",
        "Slack",
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
        "Architected and deployed scalable cloud-based web and backend systems using AWS (EC2, S3, RDS) and Docker, using open-source technologies like Flask, Node.js, and PostgreSQL",
        "Ensured 100% on-time delivery of key product releases while maintaining high availability and operational support for mission-critical healthcare applications",
        "Led the design and implementation of a seamless patient migration solution between Genome Medical and GeneMatters, integrating secure API development (Node.js, Python) with a React.js + Redux-powered one-click UI. This solution automated large-scale data transfers, eliminating manual intervention and ensuring 100% secure migration of critical patient records",
        "Collaborated on enhancing and maintaining a Vue.js-based Admin Portal, troubleshooting issues, resolving tickets, and optimizing workflows to help administrators efficiently manage partner and provider information, streamline onboarding, and improve operational efficiency",
        "Strengthened platform security by proactively identifying and resolving over 50 critical vulnerabilities using tools like Aikido & Sentry, a 30% improvement in system resilience and a reduction in reported security incidents",
        "Designed, implemented, and maintained CI/CD pipelines using tools such as GitLab CI/CD and Bitbucket pipelines, automating the build, test, and deployment processes, resulting in a 20% acceleration in release cycles and ensuring consistent delivery of high-quality software",
        "Collaborated cross-functionally with senior engineers, product managers, and designers to develop user-centric React.js and Vue.js features, contributing to the successful launch of initiatives that streamlined clinical workflows and improved operational efficiency",
        "Built and executed automated testing frameworks (unit, integration, and system testing) with Mocha, Jest, Selenium, and Cypress. This initiative resulted in a 40% reduction in production bugs, 15% acceleration in release cycles, and significantly reduced the need for hotfixes, enhancing overall system stability",
        "Played a key role in agile sprints, contributing to planning, refinement, and retrospectives to enhance team productivity, utilizing Jira for sprint management and Confluence for documentation",
        "Provided timely production support, resolving over 150 support tickets within 6 months, ensuring continuous operational reliability and minimizing system downtime",
      ],
      technologies: [
        "React.js",
        "Vue.js",
        "TypeScript",
        "JavaScript",
        "Python",
        "Flask",
        "Node.js",
        "Mocha",
        "Jest",
        "Selenium",
        "Cypress",
        "AWS",
        "Docker",
        "PostgreSQL",
        "Redux",
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
