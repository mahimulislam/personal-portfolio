import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
export default function NotFound() {
  return <section className="page-width section inner-page"><div className="page-intro"><p className="eyebrow">404 / AN UNEXPECTED DETOUR</p><h1>A loose<br /><span className="serif-word">thread.</span></h1><p>This page doesn’t exist. Let’s get you back to something that does.</p><Link to="/" className="primary-link"><ArrowLeft size={17} /> Back to the work</Link></div></section>;
}
