import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Photo from "@/components/atoms/Photo";
import Metrics from "@/components/molecules/Metrics";
import { featuredCase } from "@/lib/content";

type Props = { photoLabel: string; cta: { href: string; label: string }; className?: string; children: ReactNode };

/** Featured case study: photo + copy panel with headline metrics and a link. */
export default function CaseFeature({ photoLabel, cta, className, children }: Props) {
  return (
    <section className={"wrap " + (className ?? "")} aria-label="Featured case study">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] bg-surface">
        <Photo label={photoLabel} className="min-h-65 md:min-h-110" />
        <div className="flex flex-col justify-center gap-[18px] py-7 px-5 md:p-10">
          {children}
          <Metrics items={featuredCase.metrics} />
          <Link href={cta.href} className="btn btn-ghost self-start">{cta.label} <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  );
}
