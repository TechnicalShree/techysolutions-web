import type { ReactNode } from "react";

/** Page title + lead paragraph, split across a ruled header band. */
export default function PageHead({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="wrap pt-[clamp(24px,7vw,88px)] pb-[clamp(40px,5vw,56px)] border-b-2 border-divider">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-[clamp(24px,4vw,56px)] items-start md:items-end">
        <h1 className="text-display -ml-[0.04em]">{title}</h1>
        <p className="text-lead max-w-[48ch] text-ink/80">{children}</p>
      </div>
    </section>
  );
}
