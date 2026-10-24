import Image from "next/image";

type Props = {
  label: string;
  src?: string;
  alt?: string;
  className?: string;
  sizes?: string;
};

/** Grayscale photo frame. Without `src` it renders a labelled placeholder. Put images in /public/images. */
export default function Photo({ label, src, alt, className, sizes = "(max-width: 860px) 100vw, 50vw" }: Props) {
  return (
    <div
      className={
        "relative flex items-end overflow-hidden rounded-2xl p-3 text-xs text-ink/70 grayscale contrast-[1.08] " +
        "bg-[repeating-linear-gradient(135deg,var(--color-surface)_0_12px,color-mix(in_srgb,var(--color-ink)_6%,var(--color-surface))_12px_13px)] " +
        (className ?? "")
      }
    >
      {src ? <Image src={src} alt={alt ?? ""} fill sizes={sizes} className="object-cover" /> : <span>{label}</span>}
    </div>
  );
}
