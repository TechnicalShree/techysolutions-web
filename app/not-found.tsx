import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container section" style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-start" }}>
      <span className="kicker" style={{ margin: 0 }}>404</span>
      <h1 className="display">This page didn’t make it to go-live.</h1>
      <Link href="/" className="btn btn-primary btn-lg">Back to home</Link>
    </section>
  );
}
