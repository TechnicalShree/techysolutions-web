import ContactForm from "@/components/organisms/ContactForm";
import ContactInfo from "@/components/organisms/ContactInfo";

export default function ContactTemplate() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
      <ContactInfo />
      <div className="pt-[clamp(40px,7vw,88px)] px-(--edge) pb-14 bg-surface">
        <ContactForm />
      </div>
    </section>
  );
}
