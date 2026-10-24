import type { Metadata } from "next";
import ServicesTemplate from "@/components/templates/ServicesTemplate";

export const metadata: Metadata = {
  title: "Services",
  description: "ERP customisation, Frappe & ERPNext implementation, Next.js web apps, support and dedicated developers.",
};

export default function ServicesPage() {
  return <ServicesTemplate />;
}
