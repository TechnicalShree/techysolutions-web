"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { enquiryNeeds, erpOptions, timelineOptions } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

const label = "block text-xs mb-[5px] text-ink/70";

/** Full enquiry form (contact page) or a compact variant (home page CTA). Posts to /api/contact. */
export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [needs, setNeeds] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const toggleNeed = (n: string) =>
    setNeeds((cur) => (cur.includes(n) ? cur.filter((x) => x !== n) : [...cur, n]));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, needs }),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) throw new Error(json.error || "Something went wrong. Please try again.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col gap-5" role="status">
        <span className="size-12 grid place-items-center rounded-2xl bg-accent text-paper"><Check size={24} strokeWidth={2.5} /></span>
        <h2 className="text-[40px] leading-11">Thanks — we’ve got it.</h2>
        <p className="text-ink/78">
          {needs.length ? "You asked about: " + needs.join(", ") + ". " : ""}We’ll reply to your email with next steps.
        </p>
        <button type="button" className="btn btn-secondary self-start" onClick={() => { setNeeds([]); setStatus("idle"); }}>
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-[18px]" onSubmit={onSubmit} noValidate={false}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={label} htmlFor="cf-name">Full name</label>
          <input id="cf-name" name="name" className="input" placeholder="Jane Doe" required autoComplete="name" />
        </div>
        <div>
          <label className={label} htmlFor="cf-email">Work email</label>
          <input id="cf-email" name="email" type="email" className="input" placeholder="jane@company.com" required autoComplete="email" />
        </div>
        <div>
          <label className={label} htmlFor="cf-company">Company</label>
          <input id="cf-company" name="company" className="input" placeholder="Company name" autoComplete="organization" />
        </div>
        {!compact && (
          <div>
            <label className={label} htmlFor="cf-phone">Phone (optional)</label>
            <input id="cf-phone" name="phone" type="tel" className="input" placeholder="+00 000 000 0000" autoComplete="tel" />
          </div>
        )}
      </div>

      {!compact && (
        <>
          <fieldset>
            <legend className="text-xs mb-[5px] text-ink/70">What do you need? Pick any.</legend>
            <div className="flex flex-wrap gap-2">
              {enquiryNeeds.map((n) => (
                <button key={n} type="button" className="btn btn-secondary min-h-11" aria-pressed={needs.includes(n)} onClick={() => toggleNeed(n)}>
                  {n}
                </button>
              ))}
            </div>
          </fieldset>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={label}>Are you on ERPNext today?</label>
              <div className="seg" role="radiogroup">
                {erpOptions.map((o, i) => (
                  <label className="seg-opt" key={o}>
                    <input type="radio" name="onErpnext" value={o} defaultChecked={i === 0} />
                    {o}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className={label}>Timeline</label>
              <div className="seg" role="radiogroup">
                {timelineOptions.map((o, i) => (
                  <label className="seg-opt" key={o}>
                    <input type="radio" name="timeline" value={o} defaultChecked={i === 1} />
                    {o}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      <div>
        <label className={label} htmlFor="cf-message">{compact ? "What do you need?" : "Tell us about the project"}</label>
        <textarea
          id="cf-message"
          name="message"
          className="input"
          placeholder={compact ? "A sentence or two is plenty" : "What’s not working today, and what should it do instead?"}
        />
      </div>

      <div className="absolute -left-[9999px] size-px overflow-hidden" aria-hidden="true">
        <label className={label} htmlFor="cf-website">Website</label>
        <input id="cf-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && <p className="text-sm text-accent-700" role="alert">{error}</p>}

      <button type="submit" className="btn btn-primary btn-lg w-full justify-start text-left" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send enquiry"}
        <ArrowRight size={16} className="ml-auto" />
      </button>
    </form>
  );
}
