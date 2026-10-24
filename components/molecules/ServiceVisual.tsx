import { Check } from "lucide-react";
import { goLiveChecklist } from "@/lib/content";

/** Small illustration at the top of each home-page service card. */
export default function ServiceVisual({ slug }: { slug: string }) {
  if (slug === "erp-customisation") {
    return (
      <pre className="m-0 rounded-xl py-3.5 px-4 overflow-hidden whitespace-pre bg-ink text-paper font-mono text-xs leading-5" aria-hidden="true">
        <span className="opacity-60"># custom_app/hooks.py</span>{"\n"}
        {"doc_events = {\n"}
        {'  "Sales Order": {\n'}
        {'    "on_submit": '}<span className="text-accent-400">&quot;check_credit&quot;</span>{"\n"}
        {"  }\n"}
        {"}"}
      </pre>
    );
  }
  if (slug === "erpnext-implementation") {
    return (
      <div className="bg-paper py-3 px-3.5" aria-hidden="true">
        <span className="caps block text-[11px] mb-1">Go-live checklist</span>
        <ul>
          {goLiveChecklist.map((c) => (
            <li key={c.label} className="flex items-center gap-2.5 py-1 text-[13px]">
              <span className={"size-4 grid place-items-center border-2 text-paper " + (c.done ? "bg-accent border-accent" : "border-divider")}>
                {c.done && <Check size={10} strokeWidth={4} />}
              </span>
              {c.label}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div className="bg-paper border border-divider" aria-hidden="true">
      <div className="h-6 flex items-center gap-[5px] px-2 border-b border-divider text-[11px] text-ink/70">
        <i className="size-[7px] bg-accent" /><i className="size-[7px] bg-divider" /><span className="ml-2">portal.yourcompany.com</span>
      </div>
      <div className="p-3 grid grid-cols-3 gap-2">
        <div className="col-span-3 h-3.5 w-3/5 bg-ink" />
        <div className="h-[46px] bg-surface" /><div className="h-[46px] bg-surface" /><div className="h-[46px] bg-accent" />
        <div className="col-span-2 h-2 bg-divider" />
      </div>
    </div>
  );
}
