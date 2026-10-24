import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import { aboutStats, principles, team } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "The team behind TechySolutions — ERPNext consultants and Frappe & Next.js engineers.",
};

export default function AboutPage() {
  return (
    <>
      <section className="container page-head">
        <div className="split">
          <h1 className="display">ERP people who also write the code.</h1>
          <p className="lead">
            [Your story in two or three sentences — when you started, who you work with, and why you focus on Frappe and
            ERPNext.]
          </p>
        </div>
      </section>

      <div className="container">
        <div className="stats-3">
          {aboutStats.map((s) => (
            <div className="stat" key={s.label}>
              <strong>{s.num}</strong>
              <span className="caps">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <section className="container section split-48" aria-labelledby="principles-title">
        <div>
          <span className="kicker">How we work</span>
          <h2 id="principles-title" className="h-block">Three rules on every project.</h2>
        </div>
        <div>
          {principles.map((p) => (
            <div className="row3" key={p.num}>
              <span className="n">{p.num}</span>
              <b>{p.title}</b>
              <p>{p.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container" id="team" aria-labelledby="team-title" style={{ paddingBottom: "clamp(56px, 7.5vw, 96px)" }}>
        <div className="team-head">
          <h2 id="team-title" className="h-block">The team</h2>
          <Link href="/contact">We’re hiring — get in touch</Link>
        </div>
        <div className="team-grid">
          {team.map((m, i) => (
            <div key={i}>
              <Photo label="Portrait" sizes="(max-width: 960px) 50vw, 25vw" />
              <b>{m.name}</b>
              <span>{m.role}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
