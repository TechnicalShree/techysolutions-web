import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { engagementModels } from "@/lib/content";

/** Ways to work with us, plus the closing call to action on the services page. */
export default function EngagementModels() {
  return (
    <section className="section" aria-labelledby="engage-title">
      <span className="kicker">How we work together</span>
      <h2 id="engage-title" className="text-section mt-3 max-w-[20ch]">Pick the model that fits your stage.</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-12 border-t-2 border-ink">
        {engagementModels.map((m, i) => (
          <div key={m.title} className="flex flex-col gap-3 py-7 md:px-7 md:first:pl-0 md:border-l-2 md:first:border-l-0 border-b-2 md:border-b-0 border-divider">
            <span className="text-[13px] font-bold text-accent-700">0{i + 1}</span>
            <h3 className="text-block">{m.title}</h3>
            <span className="caps">{m.fit}</span>
            <p className="text-[15px] leading-6 text-ink/78">{m.copy}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-6 mt-16 p-[clamp(24px,4vw,48px)] rounded-2xl bg-ink text-paper">
        <div className="max-w-[46ch]">
          <h3 className="text-[clamp(26px,3vw,36px)] leading-tight tracking-[-0.015em]">Don’t see your problem here?</h3>
          <p className="mt-2 text-[15px] leading-6 text-paper/80">
            Tell us what’s slowing your team down. If it runs on Frappe, ERPNext or the web, we’ll scope a fix — free.
          </p>
        </div>
        <Link href="/contact" className="btn btn-primary btn-lg">
          Describe your problem <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
