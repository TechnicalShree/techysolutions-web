import PageHead from "@/components/molecules/PageHead";
import AboutStats from "@/components/organisms/AboutStats";
import Principles from "@/components/organisms/Principles";
import Team from "@/components/organisms/Team";

export default function AboutTemplate() {
  return (
    <>
      <PageHead title="ERP people who also write the code.">
        [Your story in two or three sentences — when you started, who you work with, and why you focus on Frappe and
        ERPNext.]
      </PageHead>
      <AboutStats />
      <Principles />
      <Team />
    </>
  );
}
