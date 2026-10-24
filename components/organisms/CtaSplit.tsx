import ContactForm from "@/components/organisms/ContactForm";

export default function CtaSplit() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2" aria-labelledby="cta-title">
      <div className="flex flex-col justify-between gap-10 py-[clamp(40px,6vw,72px)] px-(--edge) bg-accent text-paper">
        <h2 id="cta-title" className="text-[clamp(36px,4.6vw,60px)] leading-[1.02] tracking-[-0.025em] -ml-[0.04em]">
          Tell us what your ERP can’t do yet.
        </h2>
        <p className="font-extrabold text-2xl leading-[30px]">Free 30-minute consultation.<br />No sales script.</p>
      </div>
      <div className="py-[clamp(40px,5vw,64px)] px-(--edge) bg-surface">
        <ContactForm compact />
      </div>
    </section>
  );
}
