import { Clock, Database, GitMerge, TrendingUp } from "lucide-react";
import { outcomes } from "@/lib/content";

const outcomeIcons = { database: Database, clock: Clock, workflow: GitMerge, trend: TrendingUp } as const;

export default function OutcomesBand() {
  return (
    <section className="section bg-ink text-paper mt-[clamp(56px,7vw,88px)]">
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-[clamp(24px,4vw,56px)] items-start md:items-end">
          <h2 className="text-section">What changes when your ERP finally fits.</h2>
          <p className="text-lead max-w-[48ch] text-paper/82">
            Owners get numbers they trust. Finance closes faster. Operations stops re-typing data between tools.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-14 border-t-2 border-paper/35">
          {outcomes.map((o) => {
            const Icon = outcomeIcons[o.icon];
            return (
              <div
                className="flex flex-col gap-3.5 py-6 border-b border-paper/25 sm:border-b-0 sm:pt-7 sm:pb-2 sm:px-6 sm:border-l-2 sm:border-paper/35 sm:first:border-l-0 sm:first:pl-0 sm:max-lg:nth-3:border-l-0 sm:max-lg:nth-3:pl-0"
                key={o.title}
              >
                <Icon size={32} strokeWidth={2} className="text-accent-400" />
                <h3 className="text-[22px]">{o.title}</h3>
                <p className="text-[15px] leading-6 text-paper/80">{o.copy}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
