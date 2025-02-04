import "../styles/profileCard.css";  

const Home = () => (
  <section className="profile-container">
    <div className="profile-card">
      <img 
        src="/images/mahimul.jpg" 
        alt="Mahimul Islam" 
        className="profile-image"
      />
      
      <h1 className="profile-name">Mahimul Islam</h1>

      <p className="profile-title">Full Stack Engineer</p>

      <p className="profile-skills">React.js | Node.js | Python | AWS</p>

      <div className="profile-social-links">
        <a href="https://github.com/mahimulislam" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/mahimulislam" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:mahimulislam@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
      </div>
    </div>

    <div className="profile-summary">
      <p>
        I am an experienced Full Stack Engineer with 5+ years of expertise in <strong>building scalable, secure, and efficient web applications</strong>. 
        Specializing in <strong>React.js, Node.js, Python, and AWS</strong>, I am passionate about <strong>developing high-performance backend systems, automating processes, 
        and delivering user-centric solutions</strong>.
      </p>
      <p className="mt-3">
        I have contributed to <strong>major projects</strong> including large-scale <strong>healthcare platform migrations</strong>, automated <strong>e-commerce scraping solutions</strong>, 
        and <strong>published research on NLP & Text Summarization</strong>. My approach is driven by <strong>problem-solving, optimization, and continuous improvement</strong>.
      </p>
    </div>
  </section>
);

export default Home;