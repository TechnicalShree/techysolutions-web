import Tag from "@/components/atoms/Tag";
import CaseFeature from "@/components/organisms/CaseFeature";
import CaseStudyGrid from "@/components/organisms/CaseStudyGrid";
import CtaBand from "@/components/organisms/CtaBand";

export default function CaseStudiesTemplate() {
  return (
    <>
      <section className="wrap pt-[clamp(56px,7vw,88px)]">
        <h1 className="text-display -ml-[0.04em]">Work that went live.</h1>
      </section>
      <CaseFeature
        className="pt-10"
        photoLabel="Featured project photo or screenshot"
        cta={{ href: "/contact", label: "Start a similar project" }}
      >
        <Tag className="self-start">Featured · Implementation</Tag>
        <h2 className="text-[clamp(26px,2.8vw,36px)] leading-[1.1] tracking-[-0.02em]">
          [Client name]: [headline outcome, e.g. month-end close in 2 days]
        </h2>
        <p className="text-ink/78 text-base leading-6.5">
          [Two sentences: the problem they had, what you implemented, and the measurable result.]
        </p>
      </CaseFeature>
      <section className="wrap" aria-label="All case studies">
        <CaseStudyGrid />
      </section>
      <CtaBand />
    </>
  );
}
