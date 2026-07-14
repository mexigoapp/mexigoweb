import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-3 px-6 py-8 text-sm text-zinc-600 dark:text-zinc-400 sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} MexiGo. All rights reserved.</p>
        <div className="flex gap-5">
          <a
            href="mailto:admin@mexigoapp.com"
            className="transition-colors hover:text-fire-brick"
          >
            admin@mexigoapp.com
          </a>
          <Link href="/privacy" className="transition-colors hover:text-fire-brick">
            Privacy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-fire-brick">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
