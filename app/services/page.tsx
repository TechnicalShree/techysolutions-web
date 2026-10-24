import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: "ERP customisation, Frappe & ERPNext implementation, Next.js web apps, support and dedicated developers.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="container page-head">
        <div className="split">
          <h1 className="display">One partner for your whole ERP stack.</h1>
          <p className="lead">
            From the first process workshop to custom apps, customer portals and long-term support — on open-source
            Frappe, ERPNext and Next.js.
          </p>
        </div>
      </section>

      <div className="container">
        {services.map((s) => (
          <section className="svc-detail" id={s.slug} key={s.slug} aria-labelledby={s.slug + "-title"}>
            <div>
              <span className="mark">{s.num}</span>
              <h2 id={s.slug + "-title"}>{s.title}</h2>
              <p className="muted" style={{ fontSize: 16, lineHeight: "26px" }}>{s.outcome}</p>
            </div>
            <div>
              <span className="caps">What we do</span>
              <ul className="plain list-ruled">
                {s.what.map((w) => <li key={w}>{w}</li>)}
              </ul>
            </div>
            <div>
              <span className="caps">You get</span>
              <ul className="plain deliver">
                {s.deliver.map((d) => <li key={d}>{d}</li>)}
              </ul>
              <div className="tags" style={{ marginTop: 6 }}>
                {s.tech.map((t) => <span className="tag tag-outline" key={t}>{t}</span>)}
              </div>
            </div>
          </section>
        ))}

        <div className="cols-ruled">
          <div id="support">
            <span className="kicker" style={{ margin: 0 }}>Already on ERPNext?</span>
            <h3>Support &amp; upgrades</h3>
            <p>Version upgrades, fixes for slow or broken customisations, hosting and a monthly support retainer.</p>
          </div>
          <div id="hire">
            <span className="kicker" style={{ margin: 0 }}>Need extra hands?</span>
            <h3>Dedicated developers</h3>
            <p>Frappe, ERPNext and Next.js engineers who join your team full-time or part-time.</p>
          </div>
        </div>

        <div className="cta-row">
          <h3>Not sure which you need?</h3>
          <Link href="/contact" className="btn btn-primary btn-lg">
            Tell us about your business <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </>
  );
}
