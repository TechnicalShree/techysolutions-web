"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/content";

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="site-nav">
      <nav className="nav" aria-label="Main">
        <Link href="/" className="brand" aria-label={site.name + " home"}>
          <Image src="/logo-mark.png" alt="" width={35} height={32} priority />
          <span>{site.name}</span>
        </Link>
        <div className="nav-links">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
        </div>
        <Link href="/contact" className="btn btn-primary nav-cta">
          Contact us
        </Link>
        <button
          type="button"
          className="btn btn-secondary btn-icon nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <div id="mobile-menu" className="nav-mobile" data-open={open}>
        {navLinks.map((l) => (
          <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? "page" : undefined}>
            {l.label}
          </Link>
        ))}
        <Link href="/contact" className="btn btn-primary btn-block">
          Book a free consultation
        </Link>
      </div>
    </header>
  );
}
