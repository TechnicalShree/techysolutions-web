import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CaseStudyGrid from "@/components/CaseStudyGrid";
import Photo from "@/components/Photo";
import { featuredCase } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case studies",
  description: "ERPNext implementations, Frappe customisations and Next.js portals we have taken live.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="container" style={{ paddingTop: "clamp(56px, 7vw, 88px)" }}>
        <h1 className="display">Work that went live.</h1>
      </section>

      <section className="container" aria-label="Featured case study" style={{ paddingTop: 40 }}>
        <div className="case-feature">
          <Photo label="Featured project photo or screenshot" />
          <div className="case-copy">
            <span className="tag tag-accent" style={{ alignSelf: "flex-start" }}>Featured · Implementation</span>
            <h2 className="h-block" style={{ fontSize: "clamp(26px, 2.8vw, 36px)" }}>
              [Client name]: [headline outcome, e.g. month-end close in 2 days]
            </h2>
            <p className="muted" style={{ fontSize: 16, lineHeight: "26px" }}>
              [Two sentences: the problem they had, what you implemented, and the measurable result.]
            </p>
            <div className="metrics">
              {featuredCase.metrics.map((m) => (
                <div className="metric" key={m.label}><strong>{m.num}</strong><span>{m.label}</span></div>
              ))}
            </div>
            <Link href="/contact" className="btn btn-ghost">Start a similar project <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="container" aria-label="All case studies">
        <CaseStudyGrid />
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Your project could be next.</h2>
          <Link href="/contact" className="btn btn-ghost btn-on-accent">Contact us <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}
