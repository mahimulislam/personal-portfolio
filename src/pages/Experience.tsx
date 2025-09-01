import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const jobs = [
    {
      title: "Full Stack Software Engineer",
      company: "Maeknit, Inc.",
      location: "Jamaica, NY (Remote)",
      duration: "Mar 2025 – Present",
      type: "Full-time",
      website: "https://maeknit.com",
      achievements: [
        "Sole software engineer responsible for the full lifecycle of software development, working in two-week Agile sprints using Jira and Slack to collaborate directly with the CTO and CEO",
        "Designed and developed 5+ custom Odoo ERP modules across CRM, Inventory, Sales, Project, Contacts, and Email to automate internal operations and align with garment industry needs",
        "Built and launched the company's public-facing website using React.js, Next.js, HTML, CSS, delivering a fully responsive, branded digital experience",
        "Architected and implemented a dynamic financial modeling dashboard tailored to fashion manufacturing workflows, integrating margin planning, machine capacity, and sensitivity analysis",
        "Contributed to long-term infrastructure planning, including preparations for migration from Odoo.sh to AWS (EC2, RDS) to improve scalability and system responsiveness",
        "Developing an AI-powered chatbot using Python and NLP models to support internal quoting, onboarding, and knowledgebase access",
        "Daily responsibilities include 80% hands-on coding and 20% planning/testing across backend and frontend systems"
      ],
      technologies: ["Python", "OWL", "JavaScript", "XML", "React.js", "Next.js", "HTML", "CSS", "PostgreSQL", "Odoo.sh", "AWS", "Jira", "Slack"],
    },
    {
      title: "Full Stack Engineer",
      company: "Genome Medical Inc.",
      location: "South San Francisco, CA (Remote)",
      duration: "Aug 2022 – Jan 2025",
      type: "Full-time",
      website: "https://genomemedical.com",
      achievements: [
        "Architected and deployed scalable cloud-based web and backend systems using AWS (EC2, S3, RDS) and Docker, ensuring 100% on-time delivery of key product releases",
        "Led the design and implementation of a seamless patient migration solution between Genome Medical and GeneMatters, integrating secure API development with a React.js + Redux-powered one-click UI",
        "Collaborated on enhancing and maintaining a Vue.js-based Admin Portal, troubleshooting issues, resolving tickets, and optimizing workflows to help administrators efficiently manage partner and provider information",
        "Strengthened platform security by proactively identifying and resolving over 50 critical vulnerabilities using tools like Aikido & Sentry, achieving a 30% improvement in system resilience",
        "Designed, implemented, and maintained CI/CD pipelines using GitLab CI/CD and Bitbucket pipelines, resulting in a 20% acceleration in release cycles",
        "Built and executed automated testing frameworks (unit, integration, and system testing) with Mocha, Jest, Selenium, and Cypress, resulting in a 40% reduction in production bugs",
        "Provided timely production support, resolving over 150 support tickets within 6 months, ensuring continuous operational reliability"
      ],
      technologies: ["React.js", "Vue.js", "TypeScript", "JavaScript", "Python", "Flask", "Node.js", "Mocha", "Jest", "Selenium", "Cypress", "AWS", "Docker", "PostgreSQL", "Redux"],
    },
    {
      title: "Software Developer",
      company: "Cardinal Selling Services, LLC",
      location: "Huntingburg, IN",
      duration: "Jul 2014 - Jan 2021",
      type: "Full-time",
      website: "https://shopcardinal.com",
      achievements: [
        "Developed websites and web services using REST-based web services and tools including HTML, CSS, Bootstrap, JavaScript, and Django",
        "Conducted user requirement analysis and designed the Entity Relationship Diagram (ERD)",
        "Conducted integration and unit testing using automated testing frameworks including Mocha, Jest, Selenium, and Cypress",
        "Improved product scraping systems using Python and its libraries, implementing automation to streamline manual processes",
        "Provided support for email marketing initiatives and used Linux / command line and modern software development practices",
        "Worked with relational database design, SQL, and PostgreSQL, built high-scale APIs that operate on AWS"
      ],
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Django", "Python", "React.js", "TypeScript", "Node.js", "Docker", "PostgreSQL", "AWS"],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Professional{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Experience
            </span>
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
  );
};

export default Experience;