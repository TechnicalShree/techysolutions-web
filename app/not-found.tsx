import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap section flex flex-col gap-6 items-start">
      <span className="kicker">404</span>
      <h1 className="text-display -ml-[0.04em]">This page didn’t make it to go-live.</h1>
      <Link href="/" className="btn btn-primary btn-lg">Back to home</Link>
    </section>
  );
}
