type Props = { items: readonly { num: string; label: string }[] };

/** Two-up headline numbers used in case-study features. */
export default function Metrics({ items }: Props) {
  return (
    <div className="grid grid-cols-2 border-t-2 border-divider">
      {items.map((m) => (
        <div className="py-4 not-first:pl-5 not-first:border-l-2 not-first:border-divider" key={m.label}>
          <strong className="block font-extrabold text-[40px] leading-none text-accent">{m.num}</strong>
          <span className="block mt-1.5 text-[13px] text-ink/70">{m.label}</span>
        </div>
      ))}
    </div>
  );
}
