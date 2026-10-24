import { principles } from "@/lib/content";

export default function Principles() {
  return (
    <section
      className="wrap section grid grid-cols-1 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] gap-[clamp(24px,4vw,56px)]"
      aria-labelledby="principles-title"
    >
      <div>
        <span className="kicker mb-3.5">How we work</span>
        <h2 id="principles-title" className="text-block">Three rules on every project.</h2>
      </div>
      <div>
        {principles.map((p) => (
          <div
            className="grid grid-cols-[40px_minmax(0,1fr)] min-[700px]:grid-cols-[56px_minmax(0,240px)_minmax(0,1fr)] gap-6 items-baseline py-[22px] border-t-2 border-divider"
            key={p.num}
          >
            <span className="text-sm font-bold text-accent-700">{p.num}</span>
            <b className="font-extrabold text-xl">{p.title}</b>
            <p className="col-start-2 min-[700px]:col-start-auto text-[15px] leading-6 text-ink/78">{p.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
