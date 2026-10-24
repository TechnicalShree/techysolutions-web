import Link from "next/link";
import { ArrowRight } from "lucide-react";

const col = "flex flex-col gap-3 py-8 min-[760px]:py-10 scroll-mt-[90px]";

/** Support / hire columns and the closing CTA row on the services page. */
export default function ServiceExtras() {
  return (
    <>
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
    </>
  );
}
