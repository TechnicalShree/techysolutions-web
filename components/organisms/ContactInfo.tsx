import { Mail, MapPin, Phone } from "lucide-react";
import { contactNextSteps, site } from "@/lib/content";

const direct = "flex items-center gap-2.5 text-ink";

/** Left column of the contact page: headline, next steps and direct contact details. */
export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-10 pt-[clamp(48px,7vw,88px)] px-(--edge) pb-14 lg:border-r-2 lg:border-divider">
      <div className="flex flex-col gap-5">
        <h1 className="text-[clamp(38px,5vw,64px)] leading-[1.02] tracking-[-0.03em] -ml-[0.04em]">Tell us what your ERP can’t do yet.</h1>
        <p className="text-lead max-w-[48ch] text-ink/80">Share a few details and we’ll come back with next steps and a rough estimate.</p>
      </div>
      <div>
        <span className="caps block text-xs mb-2">What happens next</span>
        <ol>
          {contactNextSteps.map((s) => (
            <li key={s.num} className="grid grid-cols-[40px_minmax(0,1fr)] gap-3 py-3.5 border-t-2 border-divider">
              <span className="font-bold text-accent-700">{s.num}</span>
              <div>
                <b className="block text-base">{s.title}</b>
                <p className="text-sm leading-5.5 text-ink/78">{s.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="flex flex-col gap-1.5 text-[15px]">
        <span className="caps text-xs">Or reach us directly</span>
        <a href={"mailto:" + site.email} className={direct}><Mail size={16} /> {site.email}</a>
        <a href={"tel:" + site.phone.replace(/\s/g, "")} className={direct}><Phone size={16} /> {site.phone}</a>
        <span className={direct}><MapPin size={16} /> {site.address}</span>
      </div>
    </div>
  );
}
