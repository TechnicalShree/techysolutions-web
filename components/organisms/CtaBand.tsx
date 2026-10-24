import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBand() {
  return (
    <section className="bg-accent text-paper">
      <div className="wrap flex flex-wrap items-end justify-between gap-8 py-[clamp(48px,6vw,72px)]">
        <h2 className="text-section leading-[1.06] tracking-[-0.015em]">Your project could be next.</h2>
        <Link href="/contact" className="btn btn-ghost text-paper border-paper py-3 px-[18px] hover:text-paper hover:bg-paper/14">
          Contact us <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
