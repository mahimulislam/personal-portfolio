import "../styles/experience.css"; 

const Experience = () => {
  const jobs = [
    {
      title: "Full Stack Engineer",
      company: "Genome Medical Inc.",
      duration: "Aug 2022 – Jan 2025",
      details: [
        "Designed and deployed scalable cloud-based web applications and backend systems.",
        "Led patient migration between Genome Medical and GeneMatters platforms, ensuring HIPAA-compliant data transfer.",
        "Resolved 50+ critical security vulnerabilities using Aikido & Sentry, strengthening platform security.",
        "Implemented CI/CD pipelines with GitLab CI/CD, reducing deployment cycles by 20%.",
        "Developed and optimized APIs using Node.js and Python, improving system performance and reliability.",
        "Collaborated with cross-functional teams to enhance healthcare platform integrations.",
      ],
    },
    {
      title: "Software Developer",
      company: "Cardinal Selling Services, LLC",
      duration: "Jul 2020 - Jul 2022",
      details: [
        "Revamped Cardinal’s e-commerce platform (ShopCardinal.com), improving UI/UX and API performance.",
        "Automated product uploads, reducing manual time from 5 minutes to 1 second per product.",
        "Built an internal inventory management system, reducing manual workflows by 60%.",
        "Integrated BigCommerce API for seamless e-commerce operations and inventory tracking.",
        "Developed a web scraping solution using Django and Selenium to streamline product listings.",
      ],
    },
  ];

  return (
    <section className="experience-container">
      <h2 className="experience-title">Experience</h2>
      {jobs.map((job, index) => (
        <div key={index} className="experience-card">
          <h3 className="job-title">
            {job.title} - <span className="company">{job.company}</span>
          </h3>
          <p className="job-duration">{job.duration}</p>
          <ul className="job-details">
            {job.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
