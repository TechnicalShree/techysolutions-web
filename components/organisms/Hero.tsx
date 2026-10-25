import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Tag from "@/components/atoms/Tag";
import HeroCanvas from "@/components/organisms/HeroCanvas";
import { heroStats } from "@/lib/content";

export default function Hero() {
  return (
    <section className="bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-ink)_6%,transparent)_1px,transparent_1px)] bg-size-[calc(100%/12)_100%]">
      <div className="wrap grid grid-cols-1 xl:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-12 items-center pt-[clamp(48px,6vw,80px)] pb-[clamp(56px,7vw,88px)]">
        <div className="flex flex-col gap-7">
          <div className="flex flex-wrap gap-1.5">
            <Tag>ERPNext</Tag>
            <Tag>Frappe</Tag>
            <Tag>Next.js</Tag>
          </div>
          <h1 className="text-[clamp(40px,4.6vw,60px)] leading-[1.02] tracking-[-0.03em] -ml-[0.04em]">
            Run your whole business on one system <span className="text-accent">that fits.</span>
          </h1>
          <p className="text-lead max-w-[48ch] text-ink/80">
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
        <HeroCanvas />
      </div>
    </section>
  );
}
