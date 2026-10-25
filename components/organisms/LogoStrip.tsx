import Image from "next/image";
import { clientLogos } from "@/lib/content";

export default function LogoStrip() {
  return (
    <div className="wrap">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-4 py-7 border-y-2 border-divider">
        <span className="caps w-full md:w-[200px]">Trusted by</span>
        {clientLogos.map((l) => (
          <a
            key={l.name}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={l.name}
            className="group h-12 flex items-center pl-6 pr-10 border-l-2 border-divider"
          >
            {/* logos ship in their own colours (Dieture's is white); render all as one-tone ink silhouettes */}
            <Image
              src={l.logo}
              alt={l.name}
              width={l.width}
              height={l.height}
              className="h-10 w-auto brightness-0 opacity-55 transition-opacity group-hover:opacity-100"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
