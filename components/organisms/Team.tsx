import Link from "next/link";
import Photo from "@/components/atoms/Photo";
import { team } from "@/lib/content";

export default function Team() {
  return (
    <section className="wrap pb-[clamp(56px,7.5vw,96px)]" id="team" aria-labelledby="team-title">
      <div className="flex flex-wrap items-baseline justify-between gap-3 pb-5 mb-7 border-b-2 border-divider">
        <h2 id="team-title" className="text-block">The team</h2>
        <Link href="/contact" className="text-accent-700 underline underline-offset-3 hover:text-accent">We’re hiring — get in touch</Link>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
        {team.map((m, i) => (
          <div key={i}>
            <Photo label="Portrait" sizes="(max-width: 960px) 50vw, 25vw" className="h-50 lg:h-65 mb-2" />
            <b className="block text-base">{m.name}</b>
            <span className="text-sm text-ink/70">{m.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
