"use client";

import { useState } from "react";
import Photo from "@/components/Photo";
import { caseCategories, caseStudies } from "@/lib/content";

type Category = (typeof caseCategories)[number];

export default function CaseStudyGrid() {
  const [cat, setCat] = useState<Category>("All");
  const visible = cat === "All" ? caseStudies : caseStudies.filter((c) => c.category === cat);

  return (
    <>
      <div className="filters" role="toolbar" aria-label="Filter case studies">
        {caseCategories.map((c) => {
          const n = c === "All" ? caseStudies.length : caseStudies.filter((x) => x.category === c).length;
          return (
            <button key={c} type="button" className="btn btn-secondary chip" aria-pressed={cat === c} onClick={() => setCat(c)}>
              {c} <span>{n}</span>
            </button>
          );
        })}
      </div>
      <div className="case-grid">
        {visible.map((c) => (
          <article className="case-card" key={c.slug}>
            <Photo label="Project image" src={c.image} alt={c.title} sizes="(max-width: 600px) 100vw, 33vw" />
            <div className="case-meta">
              {c.category} <span>· {c.industry}</span>
            </div>
            <h3>{c.title}</h3>
            <p>{c.outcome}</p>
            <div className="tags">
              {c.stack.map((t) => (
                <span className="tag tag-outline" key={t}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
