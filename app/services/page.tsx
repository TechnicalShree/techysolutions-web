import type { Metadata } from "next";
import ServicesTemplate from "@/components/templates/ServicesTemplate";

export const metadata: Metadata = {
  title: "Services",
  description: "ERP customisation, ERPNext implementation, Next.js and mobile apps, integrations, hosting, support and dedicated developers — in any tech stack.",
};

export default function ServicesPage() {
  return <ServicesTemplate />;
}
