import Link from "next/link";

export default function NotFound() {
  return (
    <section
      data-nav-theme="dark"
      className="flex min-h-[100svh] flex-col justify-end bg-ink px-5 pt-36 pb-16 text-white sm:px-12"
    >
      <p className="text-meta text-white/40">404</p>
      <h1 className="text-display mt-6">
        Not
        <br />
        here.
      </h1>
      <Link href="/" className="text-meta mt-10 text-white/70 hover:text-white">
        Back to PentaSoul
      </Link>
    </section>
  );
}
