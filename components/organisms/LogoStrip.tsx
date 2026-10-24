import { clientLogos } from "@/lib/content";

export default function LogoStrip() {
  return (
    <div className="wrap">
      <div className="grid grid-cols-3 md:grid-cols-[200px_repeat(6,minmax(0,1fr))] gap-3 items-center py-7 border-y-2 border-divider">
        <span className="caps col-span-full md:col-span-1">Trusted by</span>
        {clientLogos.map((l, i) => (
          <div className="h-12 flex items-center pl-3.5 border-l-2 border-divider font-extrabold text-base text-ink/55" key={i}>{l}</div>
        ))}
      </div>
    </div>
  );
}
