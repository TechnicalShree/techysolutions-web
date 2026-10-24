import CaseFeature from "@/components/organisms/CaseFeature";
import CtaSplit from "@/components/organisms/CtaSplit";
import DeliveryPlan from "@/components/organisms/DeliveryPlan";
import Hero from "@/components/organisms/Hero";
import LogoStrip from "@/components/organisms/LogoStrip";
import OutcomesBand from "@/components/organisms/OutcomesBand";
import ServicesOverview from "@/components/organisms/ServicesOverview";
import StackRow from "@/components/organisms/StackRow";
import { featuredCase } from "@/lib/content";

export default function HomeTemplate() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <OutcomesBand />
      <ServicesOverview />
      <DeliveryPlan />
      <CaseFeature photoLabel="Client team or site photo" cta={{ href: "/case-studies", label: "Read the case study" }}>
        <span className="kicker">Case study · {featuredCase.industry}</span>
        <blockquote className="font-extrabold text-[clamp(22px,2.2vw,26px)] leading-[1.27] tracking-[-0.01em] -indent-[0.45em]">
          “{featuredCase.quote}”
        </blockquote>
        <span className="text-ink/78 text-sm">— {featuredCase.author}</span>
      </CaseFeature>
      <StackRow />
      <CtaSplit />
    </>
  );
}
