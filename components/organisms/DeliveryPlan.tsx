import { planPhases, planWeeks } from "@/lib/content";

const planTone = { ink: "bg-ink text-paper", accent: "bg-accent text-paper", mid: "bg-ink/30" } as const;

export default function DeliveryPlan() {
  return (
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
  );
}
