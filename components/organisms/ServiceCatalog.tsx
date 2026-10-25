import {
  BarChart3, Boxes, Code2, Database, LifeBuoy, Plug, Search, Server, Smartphone, Sparkles, Users, Zap,
} from "lucide-react";
import { serviceCatalog } from "@/lib/content";

const icons = {
  phone: Smartphone, plug: Plug, chart: BarChart3, zap: Zap, database: Database, users: Users,
  box: Boxes, sparkles: Sparkles, server: Server, lifebuoy: LifeBuoy, search: Search, code: Code2,
} as const;

/** Grid of every other solution we deliver beyond the three core services. */
export default function ServiceCatalog() {
  return (
    <section className="section border-b-2 border-divider" aria-labelledby="catalog-title">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-[clamp(24px,4vw,56px)] items-start md:items-end">
        <div>
          <span className="kicker">Beyond the core three</span>
          <h2 id="catalog-title" className="text-section mt-3">Whatever you need, in whatever stack.</h2>
        </div>
        <p className="text-lead max-w-[48ch] text-ink/80">
          Frappe, ERPNext and Next.js are where we started — not where we stop. We also work in Python, Node.js,
          PHP, Java, .NET, React Native, Flutter and the major clouds.
        </p>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {serviceCatalog.map((s) => {
          const Icon = icons[s.icon];
          return (
            <li
              key={s.id}
              id={s.id}
              className="group flex flex-col gap-3 p-6 rounded-2xl bg-surface border border-transparent transition-colors hover:border-accent hover:bg-paper scroll-mt-[90px]"
            >
              <span className="size-11 grid place-items-center rounded-xl bg-accent-100 text-accent-700 transition-colors group-hover:bg-accent group-hover:text-paper">
                <Icon size={22} strokeWidth={2} aria-hidden="true" />
              </span>
              <h3 className="text-block">{s.title}</h3>
              <p className="text-[15px] leading-6 text-ink/78">{s.copy}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
