import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CaseStudyGrid from "@/components/CaseStudyGrid";
import Metrics from "@/components/Metrics";
import Photo from "@/components/Photo";
import { featuredCase } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case studies",
  description: "ERPNext implementations, Frappe customisations and Next.js portals we have taken live.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="wrap pt-[clamp(56px,7vw,88px)]">
        <h1 className="text-display -ml-[0.04em]">Work that went live.</h1>
      </section>

      <section className="wrap pt-10" aria-label="Featured case study">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] bg-surface">
          <Photo label="Featured project photo or screenshot" className="min-h-65 md:min-h-110" />
          <div className="flex flex-col justify-center gap-[18px] py-7 px-5 md:p-10">
            <span className="tag tag-accent self-start">Featured · Implementation</span>
            <h2 className="text-[clamp(26px,2.8vw,36px)] leading-[1.1] tracking-[-0.02em]">
              [Client name]: [headline outcome, e.g. month-end close in 2 days]
            </h2>
            <p className="text-ink/78 text-base leading-6.5">
              [Two sentences: the problem they had, what you implemented, and the measurable result.]
            </p>
            <Metrics items={featuredCase.metrics} />
            <Link href="/contact" className="btn btn-ghost self-start">Start a similar project <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="wrap" aria-label="All case studies">
        <CaseStudyGrid />
      </section>

      <section className="bg-accent text-paper">
        <div className="wrap flex flex-wrap items-end justify-between gap-8 py-[clamp(48px,6vw,72px)]">
          <h2 className="text-section leading-[1.06] tracking-[-0.015em]">Your project could be next.</h2>
          <Link href="/contact" className="btn btn-ghost text-paper border-paper py-3 px-[18px] hover:text-paper hover:bg-paper/14">
            Contact us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
