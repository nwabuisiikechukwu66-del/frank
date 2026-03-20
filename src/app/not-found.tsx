import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-8xl font-light mb-4" style={{ color: "var(--border)" }}>
        404
      </p>
      <h1 className="font-mono text-2xl font-light mb-4" style={{ color: "var(--text-primary)" }}>
        Page not found.
      </h1>
      <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link href="/" className="cta-btn">
        Go Home
      </Link>
    </div>
  );
}
