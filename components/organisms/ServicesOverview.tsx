import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServiceVisual from "@/components/molecules/ServiceVisual";
import { services } from "@/lib/content";

const duoCard = "grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto] gap-5 items-center p-7 border-2 border-ink";

export default function ServicesOverview() {
  return (
    <section className="section wrap" aria-labelledby="services-title">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-[clamp(24px,4vw,56px)] items-start md:items-end">
        <div>
          <span className="kicker mb-3.5">Services</span>
          <h2 id="services-title" className="text-section">Everything your ERP needs, from one team.</h2>
        </div>
        <p className="text-lead max-w-[48ch] text-ink/80">
          Start with one service or hand us the whole stack. Either way you get the same senior team.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
        {services.map((s) => (
          <article
            className="flex flex-col overflow-hidden rounded-2xl bg-surface border-t-4 border-ink transition-[border-color,box-shadow] duration-150 hover:border-accent hover:shadow-md"
            key={s.slug}
          >
            <div className="h-50 p-5 flex flex-col justify-end"><ServiceVisual slug={s.slug} /></div>
            <div className="flex-1 flex flex-col gap-3 pt-6 px-6 pb-7">
              <span className="text-[13px] font-bold text-accent-700">{s.num}</span>
              <h3 className="text-[26px] leading-[30px]">{s.title}</h3>
              <p className="text-[15px] leading-6 text-ink/78">{s.short}</p>
              <Link href={"/services#" + s.slug} className="btn btn-ghost self-start mt-auto">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className={duoCard}>
          <div>
            <span className="kicker mb-2">Already on ERPNext?</span>
            <h3 className="text-[22px] mb-2">Support, fixes &amp; version upgrades</h3>
            <p className="text-sm leading-5.5 text-ink/78">Slow pages, broken customisations or stuck on an old version — we take it over.</p>
          </div>
          <div className="flex items-center gap-2 font-extrabold text-xl" aria-hidden="true">
            <span className="py-2 px-2.5 rounded-lg bg-surface">v13</span>
            <ArrowRight size={18} strokeWidth={2.5} />
            <span className="py-2 px-2.5 rounded-lg bg-accent text-paper">v15</span>
          </div>
        </div>
        <div className={duoCard}>
          <div>
            <span className="kicker mb-2">Need extra hands?</span>
            <h3 className="text-[22px] mb-2">Hire our developers</h3>
            <p className="text-sm leading-5.5 text-ink/78">Frappe, ERPNext and Next.js engineers — full-time or part-time, in your team.</p>
          </div>
          <Link href="/contact" className="btn btn-secondary">Ask about availability</Link>
        </div>
      </div>
    </section>
  );
}
