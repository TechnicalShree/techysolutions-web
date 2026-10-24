import Image from "next/image";
import Link from "next/link";
import { services, site } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="brand">
              <Image src="/logo-mark.png" alt="" width={30} height={28} />
              <span>{site.name}</span>
            </Link>
            <p>ERP customisation, Frappe &amp; ERPNext implementation, Next.js development and engineering talent.</p>
          </div>
          <div>
            <h4>Services</h4>
            {services.map((s) => (
              <Link key={s.slug} href={"/services#" + s.slug}>{s.title}</Link>
            ))}
            <Link href="/services#support">Support &amp; upgrades</Link>
            <Link href="/services#hire">Hire developers</Link>
          </div>
          <div>
            <h4>Company</h4>
            <Link href="/case-studies">Case studies</Link>
            <Link href="/about">About</Link>
            <Link href="/about#team">Careers</Link>
          </div>
          <div>
            <h4>Contact</h4>
            <a href={"mailto:" + site.email}>{site.email}</a>
            <a href={"tel:" + site.phone.replace(/\s/g, "")}>{site.phone}</a>
            <span>{site.address}</span>
          </div>
        </div>
        <div className="footer-legal">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span>Frappe and ERPNext are trademarks of Frappe Technologies.</span>
        </div>
      </div>
    </footer>
  );
}
