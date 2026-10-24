import Link from "next/link";
import { ArrowRight, Check, Clock, Database, GitMerge, TrendingUp } from "lucide-react";
import HeroVisual from "@/components/HeroVisual";
import Metrics from "@/components/Metrics";
import Photo from "@/components/Photo";
import ContactForm from "@/components/ContactForm";
import {
  clientLogos,
  featuredCase,
  goLiveChecklist,
  heroStats,
  outcomes,
  planPhases,
  planWeeks,
  services,
  stack,
} from "@/lib/content";

const outcomeIcons = { database: Database, clock: Clock, workflow: GitMerge, trend: TrendingUp } as const;
const split = "grid grid-cols-1 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-[clamp(24px,4vw,56px)] items-start md:items-end";
const lead = "text-lead max-w-[48ch]";
const planTone = { ink: "bg-ink text-paper", accent: "bg-accent text-paper", mid: "bg-ink/30" } as const;

function ServiceVisual({ slug }: { slug: string }) {
  if (slug === "erp-customisation") {
    return (
      <pre className="m-0 py-3.5 px-4 overflow-hidden whitespace-pre bg-ink text-paper font-mono text-xs leading-5" aria-hidden="true">
        <span className="opacity-60"># custom_app/hooks.py</span>{"\n"}
        {"doc_events = {\n"}
        {'  "Sales Order": {\n'}
        {'    "on_submit": '}<span className="text-accent-400">&quot;check_credit&quot;</span>{"\n"}
        {"  }\n"}
        {"}"}
      </pre>
    );
  }
  if (slug === "erpnext-implementation") {
    return (
      <div className="bg-paper py-3 px-3.5" aria-hidden="true">
        <span className="caps block text-[11px] mb-1">Go-live checklist</span>
        <ul>
          {goLiveChecklist.map((c) => (
            <li key={c.label} className="flex items-center gap-2.5 py-1 text-[13px]">
              <span className={"size-4 grid place-items-center border-2 text-paper " + (c.done ? "bg-accent border-accent" : "border-divider")}>
                {c.done && <Check size={10} strokeWidth={4} />}
              </span>
              {c.label}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div className="bg-paper border border-divider" aria-hidden="true">
      <div className="h-6 flex items-center gap-[5px] px-2 border-b border-divider text-[11px] text-ink/70">
        <i className="size-[7px] bg-accent" /><i className="size-[7px] bg-divider" /><span className="ml-2">portal.yourcompany.com</span>
      </div>
      <div className="p-3 grid grid-cols-3 gap-2">
        <div className="col-span-3 h-3.5 w-3/5 bg-ink" />
        <div className="h-[46px] bg-surface" /><div className="h-[46px] bg-surface" /><div className="h-[46px] bg-accent" />
        <div className="col-span-2 h-2 bg-divider" />
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-ink)_6%,transparent)_1px,transparent_1px)] bg-size-[calc(100%/12)_100%]">
        <div className="wrap grid grid-cols-1 xl:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-12 items-center pt-[clamp(48px,6vw,80px)] pb-[clamp(56px,7vw,88px)]">
          <div className="flex flex-col gap-7">
            <div className="flex flex-wrap gap-1.5">
              <span className="tag tag-accent">ERPNext</span>
              <span className="tag tag-accent">Frappe</span>
              <span className="tag tag-accent">Next.js</span>
            </div>
            <h1 className="text-display -ml-[0.04em]">
              Run your whole business on one system <span className="text-accent">that fits.</span>
            </h1>
            <p className={lead + " text-ink/80"}>
              We implement, customise and support ERPNext — and build the portals around it — so your finance and
              operations teams stop working around their software.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary btn-lg min-w-55 justify-start">
                Book a free consultation <ArrowRight size={16} className="ml-auto" />
              </Link>
              <Link href="/case-studies" className="btn btn-secondary btn-lg">See our work</Link>
            </div>
            <div className="flex flex-wrap gap-7 pt-5 border-t-2 border-divider">
              {heroStats.map((s) => (
                <div key={s.label}>
                  <strong className="block font-extrabold text-[30px] leading-none">{s.num}</strong>
                  <span className="block mt-1.5 text-[13px] text-ink/70">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <div className="wrap">
        <div className="grid grid-cols-3 md:grid-cols-[200px_repeat(6,minmax(0,1fr))] gap-3 items-center py-7 border-y-2 border-divider">
          <span className="caps col-span-full md:col-span-1">Trusted by</span>
          {clientLogos.map((l, i) => (
            <div className="h-12 flex items-center pl-3.5 border-l-2 border-divider font-extrabold text-base text-ink/55" key={i}>{l}</div>
          ))}
        </div>
      </div>

      <section className="section bg-ink text-paper mt-[clamp(56px,7vw,88px)]">
        <div className="wrap">
          <div className={split}>
            <h2 className="text-section">What changes when your ERP finally fits.</h2>
            <p className={lead + " text-paper/82"}>Owners get numbers they trust. Finance closes faster. Operations stops re-typing data between tools.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-14 border-t-2 border-paper/35">
            {outcomes.map((o) => {
              const Icon = outcomeIcons[o.icon];
              return (
                <div
                  className="flex flex-col gap-3.5 py-6 border-b border-paper/25 sm:border-b-0 sm:pt-7 sm:pb-2 sm:px-6 sm:border-l-2 sm:border-paper/35 sm:first:border-l-0 sm:first:pl-0 sm:max-lg:nth-3:border-l-0 sm:max-lg:nth-3:pl-0"
                  key={o.title}
                >
                  <Icon size={32} strokeWidth={2} className="text-accent-400" />
                  <h3 className="text-[22px]">{o.title}</h3>
                  <p className="text-[15px] leading-6 text-paper/80">{o.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section wrap" aria-labelledby="services-title">
        <div className={split}>
          <div>
            <span className="kicker mb-3.5">Services</span>
            <h2 id="services-title" className="text-section">Everything your ERP needs, from one team.</h2>
          </div>
          <p className={lead + " text-ink/80"}>Start with one service or hand us the whole stack. Either way you get the same senior team.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
          {services.map((s) => (
            <article
              className="flex flex-col bg-surface border-t-4 border-ink transition-[border-color,box-shadow] duration-150 hover:border-accent hover:shadow-md"
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
          <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto] gap-5 items-center p-7 border-2 border-ink">
            <div>
              <span className="kicker mb-2">Already on ERPNext?</span>
              <h3 className="text-[22px] mb-2">Support, fixes &amp; version upgrades</h3>
              <p className="text-sm leading-5.5 text-ink/78">Slow pages, broken customisations or stuck on an old version — we take it over.</p>
            </div>
            <div className="flex items-center gap-2 font-extrabold text-xl" aria-hidden="true">
              <span className="py-2 px-2.5 bg-surface">v13</span>
              <ArrowRight size={18} strokeWidth={2.5} />
              <span className="py-2 px-2.5 bg-accent text-paper">v15</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto] gap-5 items-center p-7 border-2 border-ink">
            <div>
              <span className="kicker mb-2">Need extra hands?</span>
              <h3 className="text-[22px] mb-2">Hire our developers</h3>
              <p className="text-sm leading-5.5 text-ink/78">Frappe, ERPNext and Next.js engineers — full-time or part-time, in your team.</p>
            </div>
            <Link href="/contact" className="btn btn-secondary">Ask about availability</Link>
          </div>
        </div>
      </section>

      <section
        className="wrap grid grid-cols-1 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] gap-[clamp(24px,4vw,56px)] pb-[clamp(56px,7.5vw,96px)]"
        aria-labelledby="plan-title"
      >
        <div className="flex flex-col gap-4">
          <span className="kicker">How we deliver</span>
          <h2 id="plan-title" className="text-block">A plan you can see before we start.</h2>
          <p className="text-ink/78 text-base leading-6.5">
            Every project gets a written scope, a week-by-week plan and a fixed go-live date.
          </p>
        </div>
        <div className="overflow-x-auto">
          <div className="min-w-160">
            <div className="grid grid-cols-[160px_repeat(12,minmax(0,1fr))] items-center pb-2 border-b-2 border-ink text-[11px] text-ink/65">
              <span>Example plan</span>
              {planWeeks.map((w) => <span key={w}>{w}</span>)}
            </div>
            {planPhases.map((p) => (
              <div
                className="grid grid-cols-[160px_repeat(12,minmax(0,1fr))] items-center py-3 border-b border-divider bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-ink)_7%,transparent)_1px,transparent_1px)] bg-size-[calc((100%_-_160px)/12)_100%] bg-position-[160px_0]"
                key={p.label}
              >
                <b className="text-[15px]">{p.label}</b>
                <div
                  className={"h-7 flex items-center pl-2.5 text-xs font-semibold whitespace-nowrap overflow-hidden " + planTone[p.tone]}
                  style={{ gridColumn: p.start + 1 + " / span " + p.span }}
                >
                  {p.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap" aria-label="Featured case study">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] bg-surface">
          <Photo label="Client team or site photo" className="min-h-65 md:min-h-110" />
          <div className="flex flex-col justify-center gap-[18px] py-7 px-5 md:p-10">
            <span className="kicker">Case study · {featuredCase.industry}</span>
            <blockquote className="font-extrabold text-[clamp(22px,2.2vw,26px)] leading-[1.27] tracking-[-0.01em] -indent-[0.45em]">
              “{featuredCase.quote}”
            </blockquote>
            <span className="text-ink/78 text-sm">— {featuredCase.author}</span>
            <Metrics items={featuredCase.metrics} />
            <Link href="/case-studies" className="btn btn-ghost self-start">Read the case study <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <div className="wrap section">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 py-7 border-y-2 border-divider">
          <span className="caps min-w-45">Built on open source</span>
          {stack.map((t) => <b key={t} className="font-extrabold text-lg">{t}</b>)}
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2" aria-labelledby="cta-title">
        <div className="flex flex-col justify-between gap-10 py-[clamp(40px,6vw,72px)] px-(--edge) bg-accent text-paper">
          <h2 id="cta-title" className="text-[clamp(36px,4.6vw,60px)] leading-[1.02] tracking-[-0.025em] -ml-[0.04em]">
            Tell us what your ERP can’t do yet.
          </h2>
          <p className="font-extrabold text-2xl leading-[30px]">Free 30-minute consultation.<br />No sales script.</p>
        </div>
        <div className="py-[clamp(40px,5vw,64px)] px-(--edge) bg-surface">
          <ContactForm compact />
        </div>
      </section>
    </>
  );
}
