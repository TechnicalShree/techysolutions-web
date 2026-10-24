import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: "ERP customisation, Frappe & ERPNext implementation, Next.js web apps, support and dedicated developers.",
};

const col = "flex flex-col gap-3 py-8 min-[760px]:py-10 scroll-mt-[90px]";

export default function ServicesPage() {
  return (
    <>
      <section className="wrap pt-[clamp(56px,7vw,88px)] pb-[clamp(40px,5vw,56px)] border-b-2 border-divider">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-[clamp(24px,4vw,56px)] items-start md:items-end">
          <h1 className="text-display -ml-[0.04em]">One partner for your whole ERP stack.</h1>
          <p className="text-lead max-w-[48ch] text-ink/80">
            From the first process workshop to custom apps, customer portals and long-term support — on open-source
            Frappe, ERPNext and Next.js.
          </p>
        </div>
      </section>

      <div className="wrap">
        {services.map((s) => (
          <section
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 py-12 border-b-2 border-divider scroll-mt-[90px]"
            id={s.slug}
            key={s.slug}
            aria-labelledby={s.slug + "-title"}
          >
            <div>
              <span className="flex items-center gap-2.5 text-[13px] font-bold before:content-[''] before:size-2.5 before:bg-accent">{s.num}</span>
              <h2 id={s.slug + "-title"} className="text-[32px] leading-9 my-3.5">{s.title}</h2>
              <p className="text-ink/78 text-base leading-6.5">{s.outcome}</p>
            </div>
            <div>
              <span className="caps block text-xs mb-3">What we do</span>
              <ul>
                {s.what.map((w) => (
                  <li
                    key={w}
                    className="flex gap-2.5 items-baseline py-[9px] border-t border-divider text-[15px] before:content-[''] before:size-1.5 before:bg-ink before:flex-none before:-translate-y-0.5"
                  >
                    {w}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="caps block text-xs mb-3">You get</span>
              <ul>
                {s.deliver.map((d) => <li key={d} className="text-[15px] leading-6 pb-3">{d}</li>)}
              </ul>
              <div className="flex flex-wrap gap-1.5 mt-1.5">
                {s.tech.map((t) => <span className="tag tag-outline" key={t}>{t}</span>)}
              </div>
            </div>
          </section>
        ))}

        <div className="grid grid-cols-1 min-[760px]:grid-cols-2 border-b-2 border-divider">
          <div id="support" className={col + " min-[760px]:pr-10"}>
            <span className="kicker">Already on ERPNext?</span>
            <h3 className="text-[26px]">Support &amp; upgrades</h3>
            <p className="text-[15px] leading-6 text-ink/78">Version upgrades, fixes for slow or broken customisations, hosting and a monthly support retainer.</p>
          </div>
          <div id="hire" className={col + " border-t-2 border-divider min-[760px]:border-t-0 min-[760px]:border-l-2 min-[760px]:pl-10"}>
            <span className="kicker">Need extra hands?</span>
            <h3 className="text-[26px]">Dedicated developers</h3>
            <p className="text-[15px] leading-6 text-ink/78">Frappe, ERPNext and Next.js engineers who join your team full-time or part-time.</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6 py-14">
          <h3 className="text-[clamp(26px,3vw,36px)] tracking-[-0.015em]">Not sure which you need?</h3>
          <Link href="/contact" className="btn btn-primary btn-lg">
            Tell us about your business <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </>
  );
}
