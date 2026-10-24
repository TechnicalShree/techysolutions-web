import type { Metadata } from "next";
import CaseStudiesTemplate from "@/components/templates/CaseStudiesTemplate";

export const metadata: Metadata = {
  title: "Case studies",
  description: "ERPNext implementations, Frappe customisations and Next.js portals we have taken live.",
};

export default function CaseStudiesPage() {
  return <CaseStudiesTemplate />;
}
