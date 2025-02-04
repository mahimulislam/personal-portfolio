import "../styles/education.css"; 

const Education = () => (
  <section className="education-container">
    <h2 className="education-title">Education</h2>

    <div className="education-card">
      <h3 className="degree-title">M.S. in Computer Science</h3>
      <p className="university">Georgia Institute of Technology | In Progress</p>
      <p className="details">GPA: 3.75/4.0 | Specialization: Interactive Intelligence</p>
    </div>

    <div className="education-card">
      <h3 className="degree-title">B.Sc. in Computer Science and Engineering</h3>
      <p className="university">Ahsanullah University of Science and Technology | Graduated</p>
      <p className="details">GPA: 3.43/4.0 | Thesis: Hybrid Text Summarization for Bangla Documents</p>
    </div>
  </section>
);

export default Education;
