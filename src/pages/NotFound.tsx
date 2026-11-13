import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
export default function NotFound() {
  return (
    <section className="page-width section inner-page">
      <div className="page-intro">
        <p className="eyebrow">404 / PAGE NOT FOUND</p>
        <h1>
          This page
          <br />
          <span className="accent-text">isn’t here.</span>
        </h1>
        <p>
          The address may be incorrect, or the page may have moved.
        </p>
        <Link to="/" className="primary-link">
          <ArrowLeft size={17} /> Back to home
        </Link>
      </div>
    </section>
  );
}
