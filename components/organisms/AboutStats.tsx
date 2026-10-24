import { aboutStats } from "@/lib/content";

export default function AboutStats() {
  return (
    <div className="wrap">
      <div className="grid grid-cols-3 border-b-2 border-divider">
        {aboutStats.map((s) => (
          <div className="flex flex-col gap-2 py-8 pr-3 min-[700px]:pr-6" key={s.label}>
            <strong className="font-extrabold text-[clamp(30px,4vw,56px)] leading-none text-accent">{s.num}</strong>
            <span className="caps">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
