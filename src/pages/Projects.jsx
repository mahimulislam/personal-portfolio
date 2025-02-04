import "../styles/projects.css"; 

const Projects = () => {
  const projects = [
    {
      title: "Genome Medical Patient Migration",
      description:
        "Developed an end-to-end solution for seamless patient migration between Genome Medical and GeneMatters platforms. Designed secure APIs and integrated with Node.js and Python-based systems, ensuring HIPAA-compliant data transfer.",
      tech: ["Node.js", "Python", "AWS", "React.js", "FHIR", "HL7", "Flask"],
    },
    {
      title: "Cardinal Selling Services – Automated Scraper",
      description:
        "Built a web scraping and automation tool to extract, process, and upload e-commerce product data. Reduced manual product upload time from 5 minutes to 1 second per product by leveraging Python, Django, and headless browsers.",
      tech: ["Django", "Selenium", "BeautifulSoup", "BigCommerce API", "PostgreSQL", "Docker"],
    },
    {
      title: "Cardinal's E-commerce Revamp (ShopCardinal.com)",
      description:
        "Revamped the e-commerce website for Cardinal Selling Services. Enhanced UI/UX, improved performance, and integrated BigCommerce APIs for optimized product management, boosting operational efficiency and customer experience.",
      tech: ["React.js", "Node.js", "BigCommerce API", "TailwindCSS", "AWS", "Docker"],
      link: "https://shopcardinal.com",
    },
    {
      title: "Hybrid Text Summarizer for Bangla Documents",
      description:
        "Developed an NLP-based hybrid text summarizer that combines extractive and abstractive methods to improve Bangla text processing. Published research in the International Journal of Computer Vision and Signal Processing.",
      tech: ["Python", "NLTK", "TensorFlow", "Transformers", "Scikit-learn"],
    },
    {
      title: "SAMI (Social Agent Mediated Interactions)",
      description:
        "Developing AI-driven student matching algorithms for online classrooms, improving engagement using ChatGPT-powered social AI actors. Integrated Neo4j for dynamic peer recommendations based on shared interests.",
      tech: ["Python", "Neo4j", "AWS", "OpenAI API", "Docker"],
    },
  ];

  return (
    <section className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-tech">
              <strong>Tech Used:</strong> {project.tech.join(", ")}
            </p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
