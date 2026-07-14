import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-fire-brick"
        >
          MexiGo
        </Link>
        <nav className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-fire-brick"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
