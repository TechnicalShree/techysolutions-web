import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { contactNextSteps, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us about your ERP project and get next steps and a rough estimate.",
};

export default function ContactPage() {
  return (
    <section className="contact-grid">
      <div className="contact-info">
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <h1 className="display" style={{ fontSize: "clamp(38px, 5vw, 64px)" }}>Tell us what your ERP can’t do yet.</h1>
          <p className="lead">Share a few details and we’ll come back with next steps and a rough estimate.</p>
        </div>
        <div>
          <span className="caps" style={{ display: "block", fontSize: 12, marginBottom: 8 }}>What happens next</span>
          <ol className="plain steps">
            {contactNextSteps.map((s) => (
              <li key={s.num}>
                <span className="n">{s.num}</span>
                <div>
                  <b>{s.title}</b>
                  <p>{s.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="direct">
          <span className="caps" style={{ fontSize: 12 }}>Or reach us directly</span>
          <a href={"mailto:" + site.email}><Mail size={16} /> {site.email}</a>
          <a href={"tel:" + site.phone.replace(/\s/g, "")}><Phone size={16} /> {site.phone}</a>
          <span><MapPin size={16} /> {site.address}</span>
        </div>
      </div>
      <div className="contact-form">
        <ContactForm />
      </div>
    </section>
  );
}
