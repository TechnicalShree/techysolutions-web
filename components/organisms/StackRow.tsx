import { stack } from "@/lib/content";

export default function StackRow() {
  return (
    <div className="wrap section">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-4 py-7 border-y-2 border-divider">
        <span className="caps min-w-45">Built on open source</span>
        {stack.map((t) => <b key={t} className="font-extrabold text-lg">{t}</b>)}
      </div>
    </div>
  );
}
