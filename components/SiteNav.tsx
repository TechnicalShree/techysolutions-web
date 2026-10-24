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
    <header className="sticky top-0 z-50 bg-paper border-b-2 border-divider">
      <nav className="max-w-[1280px] mx-auto py-3 px-(--edge) flex items-center gap-7" aria-label="Main">
        <Link href="/" className="flex items-center gap-2.5 mr-auto text-ink" aria-label={site.name + " home"}>
          <Image src="/logo-mark.png" alt="" width={35} height={32} priority />
          <span className="font-extrabold text-[19px] tracking-[-0.01em]">{site.name}</span>
        </Link>
        <div className="hidden md:flex gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className="text-[15px] text-ink hover:text-accent aria-[current=page]:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link href="/contact" className="btn btn-primary hidden md:inline-flex">
          Contact us
        </Link>
        <button
          type="button"
          className="btn btn-secondary size-11 p-0 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <div
        id="mobile-menu"
        data-open={open}
        className="hidden max-md:data-[open=true]:flex flex-col pt-1 pb-5 px-(--edge) border-t-2 border-divider"
      >
        {navLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            aria-current={isActive(l.href) ? "page" : undefined}
            className="py-3.5 border-b border-divider text-[17px] text-ink aria-[current=page]:text-accent"
          >
            {l.label}
          </Link>
        ))}
        <Link href="/contact" className="btn btn-primary w-full justify-start text-left mt-4 min-h-12">
          Book a free consultation
        </Link>
      </div>
    </header>
  );
}
