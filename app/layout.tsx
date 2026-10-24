import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Archivo } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/organisms/SiteNav";
import SiteFooter from "@/components/organisms/SiteFooter";
import { site } from "@/lib/content";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name + " — ERPNext, Frappe & Next.js",
    template: "%s · " + site.name,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.name + " — ERPNext, Frappe & Next.js",
    description: site.description,
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>
        <a href="#main" className="absolute -left-[9999px] top-0 z-100 bg-ink text-paper py-2.5 px-3.5 focus:left-3 focus:top-3">Skip to content</a>
        <SiteNav />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
