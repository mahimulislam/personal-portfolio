import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [composed, setComposed] = useState(false);
  async function copyEmail() {
    try { await navigator.clipboard.writeText("mahimulislam@gmail.com"); setCopied(true); setCopyError(false); }
    catch { setCopyError(true); }
  }
  function compose(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(String(data.get("subject") || "Let’s make something matter"));
    const body = encodeURIComponent(`Hi Mahimul,\n\n${data.get("message")}\n\n${data.get("name")}\n${data.get("email")}`);
    window.location.href = `mailto:mahimulislam@gmail.com?subject=${subject}&body=${body}`;
    setComposed(true);
  }
  return <section className="page-width section inner-page"><div className="page-intro"><p className="eyebrow">CONTACT / START SOMETHING</p><h1>Good things start<br /><span className="serif-word">with a conversation.</span></h1><p>Have an engineering challenge, a research question, or an idea worth exploring? I’d love to hear it.</p></div><div className="contact-grid"><div><span className="eyebrow">THE DIRECT ROUTE</span><a className="contact-email" href="mailto:mahimulislam@gmail.com">mahimulislam<br />@gmail.com <ArrowUpRight /></a><button className="text-link copy-button" onClick={copyEmail}>{copied ? <Check size={15} /> : <Copy size={15} />}{copied ? "Email copied" : "Copy email address"}</button><p className="form-feedback" role="status">{copyError ? "Please select and copy the email address above." : copied ? "Ready to paste into your email app." : ""}</p><div className="contact-links"><a href="https://linkedin.com/in/mahimulislam" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={17} /></a><a href="https://github.com/mahimulislam" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={17} /></a><a href="tel:+14709098452">470-909-8452 <ArrowUpRight size={17} /></a><span>Based in New York City, NY</span></div></div><form onSubmit={compose} className="contact-form"><span className="eyebrow">OR PUT YOUR THOUGHTS HERE</span><div className="form-row"><label>Your name<input name="name" autoComplete="name" placeholder="Alex Smith" required maxLength={150} /></label><label>Your email<input type="email" name="email" autoComplete="email" placeholder="alex@example.com" required maxLength={254} /></label></div><label>What’s on your mind?<input name="subject" placeholder="A project, a question, a possibility…" maxLength={200} /></label><label>Your message<textarea name="message" placeholder="Tell me a little about it." required rows={5} maxLength={4000} /></label><button className="primary-link" type="submit">Compose email <ArrowUpRight size={17} /></button><p className="form-note">Opens your email app with your message ready to send.</p>{composed && <p role="status" className="form-feedback">Your email draft is ready in your email app. If it didn’t open, email me directly at mahimulislam@gmail.com.</p>}</form></div></section>;
}
