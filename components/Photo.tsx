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
    <div className={"ph grayscale " + (className ?? "")}>
      {src ? <Image src={src} alt={alt ?? ""} fill sizes={sizes} /> : <span>{label}</span>}
    </div>
  );
}
