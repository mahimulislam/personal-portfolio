import "../styles/certifications.css"; 

const Certifications = () => {
    const certifications = [
      {
        title: "English Proficiency Certificate",
        issuer: "Duolingo English Test",
        date: "Issued: Jan 2025 | Expires: Jan 2027",
        link: "#",
      },
      {
        title: "GCP – Social and Behavioral Research Best Practices for Clinical Research",
        issuer: "CITI Program",
        date: "Issued: Jan 2025 | Expires: Jan 2028",
        credentialId: "64539651",
        link: "#",
      },
      {
        title: "CITI Health Information Privacy and Security (HIPS) for Biomedical Research Investigators",
        issuer: "CITI Program",
        date: "Issued: Aug 2024 | Expires: Aug 2027",
        credentialId: "64539649",
        link: "#",
      },
      {
        title: "Verified International Academic Qualifications",
        issuer: "World Education Services",
        date: "Issued: May 2021",
        link: "#",
      },
      {
        title: "Build a Google Firebase Web Application",
        issuer: "Coursera",
        date: "Issued: Jul 2020",
        credentialId: "FTL9MBC5HLST",
        link: "#",
      },
      {
        title: "Deep Learning Specialization",
        issuer: "Coursera",
        date: "Issued: Jul 2020",
        credentialId: "CUU3ZUU9RRYF",
        link: "#",
      },
      {
        title: "Java (Basic)",
        issuer: "HackerRank",
        date: "Issued: Jul 2020",
        credentialId: "61ebacc8a3c0",
        link: "#",
      },
      {
        title: "NLP: Twitter Sentiment Analysis",
        issuer: "Coursera",
        date: "Issued: Jul 2020",
        credentialId: "UDWG5QNJ2JME",
        link: "#",
      },
      {
        title: "Natural Language Processing with Classification and Vector Spaces",
        issuer: "Coursera",
        date: "Issued: Jul 2020",
        credentialId: "LXGFAMK4RXDT",
        link: "#",
      },
      {
        title: "Natural Language Processing with Probabilistic Models",
        issuer: "Coursera",
        date: "Issued: Jul 2020",
        credentialId: "ABBDHBTMSHVN",
        link: "#",
      },
      {
        title: "Problem Solving (Basic)",
        issuer: "HackerRank",
        date: "Issued: Jul 2020",
        credentialId: "6d42c4e7960c",
        link: "#",
      },
      {
        title: "Python (Basic)",
        issuer: "HackerRank",
        date: "Issued: Jul 2020",
        credentialId: "048f2e436366",
        link: "#",
      },
      {
        title: "Sequence Models",
        issuer: "Coursera",
        date: "Issued: Jul 2020",
        credentialId: "6PW6F7G8WDZE",
        link: "#",
      },
      {
        title: "The Data Scientist’s Toolbox",
        issuer: "Coursera",
        date: "Issued: Jul 2020",
        credentialId: "L89KSMZJD466",
        link: "#",
      },
      {
        title: "COVID-19 Contact Tracing",
        issuer: "Coursera",
        date: "Issued: Jun 2020",
        credentialId: "QCXXC3SHJES8",
        link: "#",
      },
      {
        title: "Convolutional Neural Networks",
        issuer: "Coursera",
        date: "Issued: Jun 2020",
        credentialId: "F99UALKP6V97",
        link: "#",
      },
      {
        title: "Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization",
        issuer: "Coursera",
        date: "Issued: Jun 2020",
        credentialId: "XWM57F8LX4RJ",
        link: "#",
      },
      {
        title: "Neural Networks and Deep Learning",
        issuer: "Coursera",
        date: "Issued: Jun 2020",
        credentialId: "JY6TXDVDLLU9",
        link: "#",
      },
      {
        title: "Python for Everybody Specialization",
        issuer: "Coursera",
        date: "Issued: Jun 2020",
        credentialId: "HVEAHSC25CDD",
        link: "#",
      },
      {
        title: "Using Databases with Python",
        issuer: "Coursera",
        date: "Issued: Jun 2020",
        credentialId: "GZSYSCSZP8Y8",
        link: "#",
      },
      {
        title: "Capstone: Retrieving, Processing, and Visualizing Data with Python",
        issuer: "Coursera",
        date: "Issued: May 2020",
        credentialId: "KGQKQXHUCYDD",
        link: "#",
      },
    ];
  
    return (
      <section className="certifications-container">
        <h2 className="certifications-title">Certifications</h2>
        <ul className="certifications-list">
          {certifications.map((cert, index) => (
            <li key={index} className="certification-card">
              <h3 className="certification-name">{cert.title}</h3>
              <p className="certification-issuer">{cert.issuer}</p>
              <p className="certification-date">{cert.date}</p>
              {cert.credentialId && <p className="credential-id">ID: {cert.credentialId}</p>}
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="certification-link">
                View Certification
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Certifications;
  