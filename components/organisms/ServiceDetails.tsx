import Tag from "@/components/atoms/Tag";
import { services } from "@/lib/content";

/** One three-column block per service on the services page. */
export default function ServiceDetails() {
  return services.map((s) => (
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
          {s.tech.map((t) => <Tag tone="outline" key={t}>{t}</Tag>)}
        </div>
      </div>
    </section>
  ));
}
