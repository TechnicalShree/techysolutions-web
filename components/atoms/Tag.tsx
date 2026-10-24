import type { ReactNode } from "react";

type Props = { tone?: "accent" | "neutral" | "outline"; className?: string; children: ReactNode };

export default function Tag({ tone = "accent", className, children }: Props) {
  return <span className={"tag tag-" + tone + (className ? " " + className : "")}>{children}</span>;
}
