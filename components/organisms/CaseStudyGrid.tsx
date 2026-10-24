"use client";

import { useState } from "react";
import Photo from "@/components/atoms/Photo";
import Tag from "@/components/atoms/Tag";
import { caseCategories, caseStudies } from "@/lib/content";

type Category = (typeof caseCategories)[number];

export default function CaseStudyGrid() {
  const [cat, setCat] = useState<Category>("All");
  const visible = cat === "All" ? caseStudies : caseStudies.filter((c) => c.category === cat);

  return (
    <>
      <div className="flex flex-wrap gap-2 mt-8" role="toolbar" aria-label="Filter case studies">
        {caseCategories.map((c) => {
          const n = c === "All" ? caseStudies.length : caseStudies.filter((x) => x.category === c).length;
          return (
            <button key={c} type="button" className="btn btn-secondary min-h-11" aria-pressed={cat === c} onClick={() => setCat(c)}>
              {c} <span className="text-xs opacity-75 tabular-nums">{n}</span>
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 pt-12 pb-18">
        {visible.map((c) => (
          <article className="flex flex-col gap-3" key={c.slug}>
            <Photo label="Project image" src={c.image} alt={c.title} sizes="(max-width: 600px) 100vw, 33vw" className="h-50" />
            <div className="text-xs tracking-[0.08em] uppercase text-accent-700">
              {c.category} <span className="text-ink/70">· {c.industry}</span>
            </div>
            <h3 className="text-[21px] leading-[26px]">{c.title}</h3>
            <p className="text-sm leading-[22px] text-ink/78">{c.outcome}</p>
            <div className="flex flex-wrap gap-1.5">
              {c.stack.map((t) => (
                <Tag tone="outline" key={t}>{t}</Tag>
              ))}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
