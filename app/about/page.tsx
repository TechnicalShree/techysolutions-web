import type { Metadata } from "next";
import AboutTemplate from "@/components/templates/AboutTemplate";

export const metadata: Metadata = {
  title: "About",
  description: "The team behind TechySolutions — ERPNext consultants and Frappe & Next.js engineers.",
};

// Re-render daily so the years-of-experience stat stays current.
export const revalidate = 86400;

export default function AboutPage() {
  return <AboutTemplate />;
}
