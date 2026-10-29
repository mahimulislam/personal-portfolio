import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Publications from "./pages/Publications";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return <BrowserRouter><Routes><Route path="/" element={<Layout><Home /></Layout>} /><Route path="/experience" element={<Layout><Experience /></Layout>} /><Route path="/projects" element={<Layout><Projects /></Layout>} /><Route path="/education" element={<Layout><Education /></Layout>} /><Route path="/publications" element={<Layout><Publications /></Layout>} /><Route path="/certifications" element={<Layout><Certifications /></Layout>} /><Route path="/contact" element={<Layout><Contact /></Layout>} /><Route path="*" element={<Layout><NotFound /></Layout>} /></Routes></BrowserRouter>;
}
