import Link from "next/link";
import { ArrowRight, Check, Clock, Database, GitMerge, TrendingUp } from "lucide-react";
import HeroVisual from "@/components/HeroVisual";
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

function ServiceVisual({ slug }: { slug: string }) {
  if (slug === "erp-customisation") {
    return (
      <pre className="code" aria-hidden="true">
        <span className="c"># custom_app/hooks.py</span>{"\n"}
        {"doc_events = {\n"}
        {'  "Sales Order": {\n'}
        {'    "on_submit": '}<span className="s">&quot;check_credit&quot;</span>{"\n"}
        {"  }\n"}
        {"}"}
      </pre>
    );
  }
  if (slug === "erpnext-implementation") {
    return (
      <div className="checklist" aria-hidden="true">
        <span className="caps" style={{ fontSize: 11, display: "block", marginBottom: 4 }}>Go-live checklist</span>
        <ul className="plain">
          {goLiveChecklist.map((c) => (
            <li key={c.label}>
              <span className={"box" + (c.done ? " on" : "")}>{c.done && <Check size={10} strokeWidth={4} />}</span>
              {c.label}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div className="browser" aria-hidden="true">
      <div className="browser-bar"><i /><i /><span>portal.yourcompany.com</span></div>
      <div className="browser-body"><div className="t" /><div className="b" /><div className="b" /><div className="b on" /><div className="l" /></div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="tags">
              <span className="tag tag-accent">ERPNext</span>
              <span className="tag tag-accent">Frappe</span>
              <span className="tag tag-accent">Next.js</span>
            </div>
            <h1 className="display">
              Run your whole business on one system <span className="accent">that fits.</span>
            </h1>
            <p className="lead">
              We implement, customise and support ERPNext — and build the portals around it — so your finance and
              operations teams stop working around their software.
            </p>
            <div className="row-btns">
              <Link href="/contact" className="btn btn-primary btn-lg" style={{ minWidth: 220, justifyContent: "flex-start" }}>
                Book a free consultation <ArrowRight size={16} className="push" />
              </Link>
              <Link href="/case-studies" className="btn btn-secondary btn-lg">See our work</Link>
            </div>
            <div className="hero-stats">
              {heroStats.map((s) => (
                <div key={s.label}>
                  <strong>{s.num}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <div className="container">
        <div className="logos">
          <span className="caps">Trusted by</span>
          {clientLogos.map((l, i) => (
            <div className="logo" key={i}>{l}</div>
          ))}
        </div>
      </div>

      <section className="band-dark section" style={{ marginTop: "clamp(56px, 7vw, 88px)" }}>
        <div className="container">
          <div className="split">
            <h2 className="h-section">What changes when your ERP finally fits.</h2>
            <p className="lead">Owners get numbers they trust. Finance closes faster. Operations stops re-typing data between tools.</p>
          </div>
          <div className="outcomes">
            {outcomes.map((o) => {
              const Icon = outcomeIcons[o.icon];
              return (
                <div className="outcome" key={o.title}>
                  <Icon size={32} strokeWidth={2} />
                  <h3>{o.title}</h3>
                  <p>{o.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section container" aria-labelledby="services-title">
        <div className="split">
          <div>
            <span className="kicker">Services</span>
            <h2 id="services-title" className="h-section">Everything your ERP needs, from one team.</h2>
          </div>
          <p className="lead">Start with one service or hand us the whole stack. Either way you get the same senior team.</p>
        </div>
        <div className="svc-grid">
          {services.map((s) => (
            <article className="svc-card" key={s.slug}>
              <div className="svc-visual"><ServiceVisual slug={s.slug} /></div>
              <div className="svc-body">
                <span className="svc-num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <Link href={"/services#" + s.slug} className="btn btn-ghost">
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="duo">
          <div className="duo-card">
            <div>
              <span className="kicker">Already on ERPNext?</span>
              <h3>Support, fixes &amp; version upgrades</h3>
              <p>Slow pages, broken customisations or stuck on an old version — we take it over.</p>
            </div>
            <div className="ver" aria-hidden="true">
              <span>v13</span><ArrowRight size={18} strokeWidth={2.5} /><span className="new">v15</span>
            </div>
          </div>
          <div className="duo-card">
            <div>
              <span className="kicker">Need extra hands?</span>
              <h3>Hire our developers</h3>
              <p>Frappe, ERPNext and Next.js engineers — full-time or part-time, in your team.</p>
            </div>
            <Link href="/contact" className="btn btn-secondary">Ask about availability</Link>
          </div>
        </div>
      </section>

      <section className="container split-48" aria-labelledby="plan-title" style={{ paddingBottom: "clamp(56px, 7.5vw, 96px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <span className="kicker" style={{ margin: 0 }}>How we deliver</span>
          <h2 id="plan-title" className="h-block">A plan you can see before we start.</h2>
          <p className="muted" style={{ fontSize: 16, lineHeight: "26px" }}>
            Every project gets a written scope, a week-by-week plan and a fixed go-live date.
          </p>
        </div>
        <div className="plan">
          <div className="plan-inner">
            <div className="plan-row plan-head">
              <span>Example plan</span>
              {planWeeks.map((w) => <span key={w}>{w}</span>)}
            </div>
            {planPhases.map((p) => (
              <div className="plan-row plan-phase" key={p.label}>
                <b>{p.label}</b>
                <div
                  className={"plan-bar" + (p.tone === "ink" ? " ink" : p.tone === "accent" ? " accent" : "")}
                  style={{ gridColumn: p.start + 1 + " / span " + p.span }}
                >
                  {p.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container" aria-label="Featured case study">
        <div className="case-feature">
          <Photo label="Client team or site photo" />
          <div className="case-copy">
            <span className="kicker" style={{ margin: 0 }}>Case study · {featuredCase.industry}</span>
            <blockquote className="quote">“{featuredCase.quote}”</blockquote>
            <span className="muted" style={{ fontSize: 14 }}>— {featuredCase.author}</span>
            <div className="metrics">
              {featuredCase.metrics.map((m) => (
                <div className="metric" key={m.label}><strong>{m.num}</strong><span>{m.label}</span></div>
              ))}
            </div>
            <Link href="/case-studies" className="btn btn-ghost">Read the case study <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <div className="container" style={{ paddingBlock: "clamp(56px, 7.5vw, 96px)" }}>
        <div className="stack-row">
          <span className="caps">Built on open source</span>
          {stack.map((t) => <b key={t}>{t}</b>)}
        </div>
      </div>

      <section className="cta-split" aria-labelledby="cta-title">
        <div className="cta-accent">
          <h2 id="cta-title">Tell us what your ERP can’t do yet.</h2>
          <p>Free 30-minute consultation.<br />No sales script.</p>
        </div>
        <div className="cta-form">
          <ContactForm compact />
        </div>
      </section>
    </>
  );
}
