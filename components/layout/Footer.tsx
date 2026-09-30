import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Register", href: "/register" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-light)] bg-[var(--surface)]">
      <div className="container py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-md">
            <Link
              href="/"
              className="font-[var(--font-cormorant)] text-3xl font-semibold tracking-tight"
            >
              NVME Academy
            </Link>

            <p className="body mt-4 max-w-sm text-[var(--muted)]">
              Professional training designed to help learners build practical
              skills, confidence, and meaningful progress.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="heading-sm">Quick Links</h2>

            <nav className="mt-5 flex flex-col gap-3" aria-label="Footer navigation">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-[var(--muted)] transition-colors duration-200 hover:text-[var(--foreground)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h2 className="heading-sm">Contact</h2>

            <div className="mt-5 space-y-3 text-sm text-[var(--muted)]">
              <p>NVMEAcademy@gmail.com</p>
              <p>0645739484</p>
              <p>Algiers Algeria</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--border-light)] pt-6 text-sm text-[var(--muted-light)] md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} NVME Academy. All rights reserved.
          </p>

          <p>Professional Training & Education</p>
        </div>
      </div>
    </footer>
  );
}