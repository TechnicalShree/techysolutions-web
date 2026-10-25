import { CheckCircle2, Flag } from "lucide-react";
import { planPhases, planPromises, planWeeks } from "@/lib/content";

// darker blue as the project moves toward go-live
const planTone = {
  a: "bg-accent-200 text-accent-900",
  b: "bg-accent-300 text-accent-900",
  c: "bg-accent-500 text-paper",
  d: "bg-accent-800 text-paper",
} as const;

const row = "grid grid-cols-[180px_repeat(12,minmax(0,1fr))] items-center";

export default function DeliveryPlan() {
  return (
    <section className="wrap pb-[clamp(56px,7.5vw,96px)]" aria-labelledby="plan-title">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] gap-[clamp(24px,4vw,56px)] items-end">
        <div className="flex flex-col gap-4">
          <span className="kicker">How we deliver</span>
          <h2 id="plan-title" className="text-section">A plan you can see before we start.</h2>
          <p className="text-lead max-w-[44ch] text-ink/80">
            No open-ended projects. You know the scope, the price and the go-live date on day one.
          </p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {planPromises.map((p) => (
            <li key={p} className="flex gap-3 items-start p-4 rounded-xl bg-surface text-[15px] leading-6">
              <CheckCircle2 size={20} className="flex-none mt-0.5 text-accent" aria-hidden="true" />
              {p}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 rounded-2xl bg-paper border-2 border-ink p-[clamp(16px,3vw,32px)] shadow-lg">
        <div className="overflow-x-auto">
          <div className="min-w-180">
            <div className={row + " pb-3 border-b-2 border-ink text-[11px] text-ink/65"}>
              <span className="caps text-[11px]">Example 12-week plan</span>
              {planWeeks.map((w) => <span key={w} className="text-center">{w}</span>)}
            </div>
            {planPhases.map((p) => (
              <div
                className={row + " py-4 border-b border-divider last:border-b-0 bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-ink)_7%,transparent)_1px,transparent_1px)] bg-size-[calc((100%_-_180px)/12)_100%] bg-position-[180px_0]"}
                key={p.label}
              >
                <div>
                  <b className="block text-[15px]">{p.label}</b>
                  <span className="block text-xs text-ink/65 mt-0.5">{p.outcome}</span>
                </div>
                <div
                  className={"h-9 flex items-center px-3.5 rounded-full text-xs font-semibold whitespace-nowrap overflow-hidden shadow-sm " + planTone[p.tone]}
                  style={{ gridColumn: p.start + 1 + " / span " + p.span }}
                >
                  {p.note}
                </div>
              </div>
            ))}
            <div className={row + " pt-4"}>
              <span />
              <span className="col-start-12 col-span-2 justify-self-end flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-ink text-paper text-xs font-bold whitespace-nowrap">
                <Flag size={14} aria-hidden="true" /> Go-live
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
