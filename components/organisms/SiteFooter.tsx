import Image from "next/image";
import Link from "next/link";
import { services, site } from "@/lib/content";

const heading = "mb-2 font-normal text-xs tracking-[0.08em] uppercase text-ink/70";
const link = "block text-ink hover:text-accent";

export default function SiteFooter() {
  return (
    <footer className="border-t-2 border-divider">
      <div className="wrap">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 pb-12 text-sm leading-[26px]">
          <div className="col-span-full md:col-span-1 flex flex-col gap-2.5">
            <Link href="/" className="flex items-center gap-2.5 text-ink">
              <Image src="/logo-mark.png" alt="" width={30} height={28} />
              <span className="font-extrabold text-[19px] tracking-[-0.01em]">{site.name}</span>
            </Link>
            <p className="text-ink/78">ERP customisation, Frappe &amp; ERPNext implementation, Next.js development and engineering talent.</p>
          </div>
          <div>
            <h4 className={heading}>Services</h4>
            {services.map((s) => (
              <Link key={s.slug} href={"/services#" + s.slug} className={link}>{s.title}</Link>
            ))}
            <Link href="/services#support" className={link}>Support &amp; upgrades</Link>
            <Link href="/services#hire" className={link}>Hire developers</Link>
          </div>
          <div>
            <h4 className={heading}>Company</h4>
            <Link href="/case-studies" className={link}>Case studies</Link>
            <Link href="/about" className={link}>About</Link>
            <Link href="/about#team" className={link}>Careers</Link>
          </div>
          <div>
            <h4 className={heading}>Contact</h4>
            <a href={"mailto:" + site.email} className={link}>{site.email}</a>
            <a href={"tel:" + site.phone.replace(/\s/g, "")} className={link}>{site.phone}</a>
            <span>{site.address}</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3 pt-4 pb-7 border-t border-divider text-[13px] text-ink/70">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span>Frappe and ERPNext are trademarks of Frappe Technologies.</span>
        </div>
      </div>
    </footer>
  );
}
