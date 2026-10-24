import PageHead from "@/components/molecules/PageHead";
import ServiceDetails from "@/components/organisms/ServiceDetails";
import ServiceExtras from "@/components/organisms/ServiceExtras";

export default function ServicesTemplate() {
  return (
    <>
      <PageHead title="One partner for your whole ERP stack.">
        From the first process workshop to custom apps, customer portals and long-term support — on open-source
        Frappe, ERPNext and Next.js.
      </PageHead>
      <div className="wrap">
        <ServiceDetails />
        <ServiceExtras />
      </div>
    </>
  );
}
