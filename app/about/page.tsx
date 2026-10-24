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
      <section className="wrap pt-[clamp(56px,7vw,88px)] pb-[clamp(40px,5vw,56px)] border-b-2 border-divider">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-[clamp(24px,4vw,56px)] items-start md:items-end">
          <h1 className="text-display -ml-[0.04em]">ERP people who also write the code.</h1>
          <p className="text-lead max-w-[48ch] text-ink/80">
            [Your story in two or three sentences — when you started, who you work with, and why you focus on Frappe and
            ERPNext.]
          </p>
        </div>
      </section>

      <div className="wrap">
        <div className="grid grid-cols-3 border-b-2 border-divider">
          {aboutStats.map((s) => (
            <div className="flex flex-col gap-2 py-8 pr-3 min-[700px]:pr-6" key={s.label}>
              <strong className="font-extrabold text-[clamp(30px,4vw,56px)] leading-none text-accent">{s.num}</strong>
              <span className="caps">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <section
        className="wrap section grid grid-cols-1 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] gap-[clamp(24px,4vw,56px)]"
        aria-labelledby="principles-title"
      >
        <div>
          <span className="kicker mb-3.5">How we work</span>
          <h2 id="principles-title" className="text-block">Three rules on every project.</h2>
        </div>
        <div>
          {principles.map((p) => (
            <div
              className="grid grid-cols-[40px_minmax(0,1fr)] min-[700px]:grid-cols-[56px_minmax(0,240px)_minmax(0,1fr)] gap-6 items-baseline py-[22px] border-t-2 border-divider"
              key={p.num}
            >
              <span className="text-sm font-bold text-accent-700">{p.num}</span>
              <b className="font-extrabold text-xl">{p.title}</b>
              <p className="col-start-2 min-[700px]:col-start-auto text-[15px] leading-6 text-ink/78">{p.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap pb-[clamp(56px,7.5vw,96px)]" id="team" aria-labelledby="team-title">
        <div className="flex flex-wrap items-baseline justify-between gap-3 pb-5 mb-7 border-b-2 border-divider">
          <h2 id="team-title" className="text-block">The team</h2>
          <Link href="/contact" className="text-accent-700 underline underline-offset-3 hover:text-accent">We’re hiring — get in touch</Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
          {team.map((m, i) => (
            <div key={i}>
              <Photo label="Portrait" sizes="(max-width: 960px) 50vw, 25vw" className="h-50 lg:h-65 mb-2" />
              <b className="block text-base">{m.name}</b>
              <span className="text-sm text-ink/70">{m.role}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
