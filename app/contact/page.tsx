import type { Metadata } from "next";
import ContactTemplate from "@/components/templates/ContactTemplate";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us about your ERP project and get next steps and a rough estimate.",
};

export default function ContactPage() {
  return <ContactTemplate />;
}
