import { Check } from "lucide-react";
import { heroDashboard } from "@/lib/content";

/** Illustrative ERPNext dashboard + workflow toast + Next.js customer portal, built in HTML/CSS. */
export default function HeroVisual() {
  const { kpis, bars, orders, portal } = heroDashboard;
  return (
    <div className="relative flex flex-col gap-4 xl:block xl:h-[560px]" aria-hidden="true">
      <div className="w-full overflow-hidden rounded-2xl bg-paper shadow-lg border border-divider xl:absolute xl:top-15 xl:right-0 xl:w-[min(610px,100%)]">
        <div className="h-[34px] bg-ink text-paper flex items-center gap-1.5 px-3 text-xs">
          <span className="size-[9px] rounded-full bg-accent" />
          <span className="size-[9px] bg-paper/40" />
          <span className="size-[9px] bg-paper/40" />
          <span className="ml-3 opacity-85 truncate">erp.yourcompany.com / app / selling</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[48px_minmax(0,1fr)]">
          <div className="hidden sm:flex bg-surface flex-col items-center gap-3.5 py-4">
            {[0, 1, 2, 3, 4].map((i) => (
              <i key={i} className="size-[18px] rounded-md border-2 border-ink/45 first:bg-accent first:border-accent" />
            ))}
          </div>
          <div className="pt-[18px] px-5 pb-5 flex flex-col gap-4 min-w-0">
            <div className="flex items-center justify-between gap-3">
              <b className="text-[17px] font-extrabold">Selling dashboard</b>
              <span className="text-xs py-1 px-2.5 border border-divider">This month</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {kpis.map((k) => (
                <div className="p-3 rounded-xl bg-surface max-sm:nth-3:hidden" key={k.label}>
                  <small className="block text-[11px] tracking-[0.06em] uppercase text-ink/70">{k.label}</small>
                  <strong className="block font-extrabold text-2xl mt-1.5">{k.value}</strong>
                  <em className="not-italic text-[11px] text-accent-700">{k.delta}</em>
                </div>
              ))}
            </div>
            <div className="flex items-end gap-2 h-30 border-b-2 border-ink">
              {bars.map((h, i) => (
                <span key={i} className="flex-1 rounded-t-md bg-ink/22 last:bg-accent" style={{ height: h + "%" }} />
              ))}
            </div>
            <div>
              {orders.map((o) => (
                <div className="grid grid-cols-[84px_minmax(0,1fr)_auto] gap-2.5 items-center py-2 border-b border-divider text-xs" key={o.id}>
                  <b className="font-bold">{o.id}</b>
                  <span className="text-ink/78">{o.who}</span>
                  <span className={o.tag}>{o.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="self-start flex items-center gap-3 py-3 pl-3 pr-4 rounded-2xl bg-ink text-paper shadow-lg xl:absolute xl:top-0 xl:left-0">
        <span className="size-[30px] grid place-items-center rounded-lg bg-accent"><Check size={16} strokeWidth={3} /></span>
        <div>
          <b className="block text-[13px]">Purchase order approved</b>
          <small className="block text-[11px] opacity-80">Custom workflow · just now</small>
        </div>
      </div>

      <div className="hidden xl:block absolute left-0 bottom-0 w-[250px] bg-paper shadow-lg border-t-4 border-accent">
        <header className="pt-3.5 px-4 pb-2.5 flex justify-between items-baseline">
          <b className="text-[15px] font-extrabold">Your orders</b>
          <small className="text-[11px] text-ink/70">Customer portal</small>
        </header>
        <ul>
          {portal.map((p) => (
            <li key={p.item} className="flex justify-between py-[9px] px-4 border-t border-divider text-xs">
              <span>{p.item}</span>
              <b className="font-bold">{p.state}</b>
            </li>
          ))}
        </ul>
        <div className="pt-3 px-4 pb-4">
          <span className="btn btn-primary w-full justify-start text-left">Reorder</span>
        </div>
      </div>

      <span className="flex items-center gap-2 text-xs text-ink/70 before:content-[''] before:size-2 before:rounded-full before:bg-accent xl:absolute xl:right-6 xl:bottom-3">
        Illustrative — your system, your data
      </span>
    </div>
  );
}
