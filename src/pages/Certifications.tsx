import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Certifications() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const certifications = [
    {
      title: "English Proficiency Certificate",
      issuer: "Duolingo English Test",
      date: "Jan 2025",
      expires: "Jan 2027",
      category: "Language",
      status: "Active",
      link: "#",
    },
    {
      title:
        "GCP – Social and Behavioral Research Best Practices for Clinical Research",
      issuer: "CITI Program",
      date: "Jan 2025",
      expires: "Jan 2028",
      credentialId: "64539651",
      category: "Research",
      status: "Active",
      link: "#",
    },
    {
      title:
        "CITI Health Information Privacy and Security (HIPS) for Biomedical Research",
      issuer: "CITI Program",
      date: "Aug 2024",
      expires: "Aug 2027",
      credentialId: "64539649",
      category: "Healthcare",
      status: "Active",
      link: "#",
    },
    {
      title: "Verified International Academic Qualifications",
      issuer: "World Education Services",
      date: "May 2021",
      category: "Academic",
      status: "Permanent",
      link: "#",
    },
    {
      title: "Deep Learning Specialization",
      issuer: "Coursera",
      date: "Jul 2020",
      credentialId: "CUU3ZUU9RRYF",
      category: "AI/ML",
      status: "Permanent",
      link: "#",
    },
    {
      title: "Build a Google Firebase Web Application",
      issuer: "Coursera",
      date: "Jul 2020",
      credentialId: "FTL9MBC5HLST",
      category: "Web Development",
      status: "Permanent",
      link: "#",
    },
    {
      title:
        "Natural Language Processing with Classification and Vector Spaces",
      issuer: "Coursera",
      date: "Jul 2020",
      credentialId: "LXGFAMK4RXDT",
      category: "AI/ML",
      status: "Permanent",
      link: "#",
    },
    {
      title: "Natural Language Processing with Probabilistic Models",
      issuer: "Coursera",
      date: "Jul 2020",
      credentialId: "ABBDHBTMSHVN",
      category: "AI/ML",
      status: "Permanent",
      link: "#",
    },
    {
      title: "Sequence Models",
      issuer: "Coursera",
      date: "Jul 2020",
      credentialId: "6PW6F7G8WDZE",
      category: "AI/ML",
      status: "Permanent",
      link: "#",
    },
    {
      title: "Convolutional Neural Networks",
      issuer: "Coursera",
      date: "Jun 2020",
      credentialId: "F99UALKP6V97",
      category: "AI/ML",
      status: "Permanent",
      link: "#",
    },
    {
      title: "Python for Everybody Specialization",
      issuer: "Coursera",
      date: "Jun 2020",
      credentialId: "HVEAHSC25CDD",
      category: "Programming",
      status: "Permanent",
      link: "#",
    },
    {
      title: "Java (Basic)",
      issuer: "HackerRank",
      date: "Jul 2020",
      credentialId: "61ebacc8a3c0",
      category: "Programming",
      status: "Permanent",
      link: "#",
    },
  ];

  const categories = [
    "All",
    ...new Set(certifications.map((cert) => cert.category)),
  ];
  const visible = certifications.filter(
    (cert) =>
      (category === "All" || category === cert.category) &&
      `${cert.title} ${cert.issuer} ${cert.category}`
        .toLowerCase()
        .includes(search.toLowerCase()),
  );
  return (
    <section className="page-width section inner-page">
      <div className="page-intro">
        <p className="eyebrow">LEARNING / KEEP FOLLOWING THE THREAD</p>
        <h1>
          Curiosity doesn’t
          <br />
          <span className="serif-word">clock out.</span>
        </h1>
        <p>
          Selected certifications and credentials across AI, software
          development, healthcare, and research.
        </p>
      </div>
      <div className="certification-tools">
        <label className="sr-only" htmlFor="credential-search">
          Search certifications
        </label>
        <input
          id="credential-search"
          type="search"
          placeholder="Search certifications…"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <div className="filter-bar" aria-label="Filter certifications">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <p className="eyebrow" aria-live="polite" style={{ marginBottom: 20 }}>
        {visible.length} CREDENTIAL{visible.length === 1 ? "" : "S"}
      </p>
      <div className="credential-list">
        {visible.map((cert) => (
          <article className="credential-item" key={cert.title}>
            <span className="eyebrow">
              {cert.category} / {cert.date}
            </span>
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
            {cert.expires && <p>Valid through {cert.expires}</p>}
            {cert.credentialId && <p>Credential ID: {cert.credentialId}</p>}
            {cert.issuer === "Coursera" && cert.credentialId && (
              <a
                className="text-link"
                target="_blank"
                rel="noreferrer"
                href={`https://www.coursera.org/account/accomplishments/${cert.title.includes("Specialization") ? "specialization/" : "verify/"}${cert.credentialId}`}
              >
                View credential <ArrowUpRight size={14} />
              </a>
            )}
            {cert.issuer === "HackerRank" && cert.credentialId && (
              <a
                className="text-link"
                target="_blank"
                rel="noreferrer"
                href={`https://www.hackerrank.com/certificates/${cert.credentialId}`}
              >
                View credential <ArrowUpRight size={14} />
              </a>
            )}
          </article>
        ))}
      </div>
      {visible.length === 0 && (
        <p>No credentials match your search. Try another term or category.</p>
      )}
    </section>
  );
}
