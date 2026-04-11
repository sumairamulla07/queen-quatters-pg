import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Queen Quatters PG Near PCCOE",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="font-display text-6xl font-bold text-foreground mb-4">
        404
      </h1>
      <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
        Page Not Found
      </h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        Looks like this room is already taken! Let&apos;s get you back to the
        main page.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Back to Queen Quatters
      </Link>
    </div>
  );
}
