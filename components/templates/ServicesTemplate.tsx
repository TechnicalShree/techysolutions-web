import PageHead from "@/components/molecules/PageHead";
import ServiceDetails from "@/components/organisms/ServiceDetails";
import ServiceCatalog from "@/components/organisms/ServiceCatalog";
import EngagementModels from "@/components/organisms/EngagementModels";

export default function ServicesTemplate() {
  return (
    <>
      <PageHead title="One partner for your whole ERP stack.">
        From the first process workshop to custom apps, mobile apps, integrations and long-term support. ERPNext
        is our specialty, but we build in whatever stack your business already runs on.
      </PageHead>
      <div className="wrap">
        <ServiceDetails />
        <ServiceCatalog />
        <EngagementModels />
      </div>
    </>
  );
}
