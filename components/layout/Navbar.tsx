"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "الرئيسية", href: "/" },
  { label: "من نحن", href: "/about" },
  { label: "الدورات", href: "/courses" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-light)] bg-[rgba(248,247,244,0.94)] backdrop-blur-md">
      <nav
        className="container flex min-h-20 items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <Link
          href="/"
          onClick={closeMenu}
          className="relative z-10 font-[var(--font-cormorant)] text-2xl font-semibold tracking-tight"
          aria-label="الانتقال إلى الصفحة الرئيسية"
        >
          NVME Academy
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--muted)] transition-colors duration-200 hover:text-[var(--foreground)]"
            >
              {item.label}
            </Link>
          ))}

          <Link href="/register" className="btn btn-primary">
            سجّل الآن
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="relative z-10 flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border)] md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "إغلاق قائمة التنقل"  : "فتح قائمة التنقل"}
        >
          <span className="sr-only">
            {isOpen ? "إغلاق قائمة التنقل" : "فتح قائمة التنقل"}
          </span>

          <span className="flex flex-col gap-1.5">
            <span
              className={`block h-px w-5 bg-[var(--foreground)] transition-transform duration-200 ${
                isOpen ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-[var(--foreground)] transition-opacity duration-200 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-px w-5 bg-[var(--foreground)] transition-transform duration-200 ${
                isOpen ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          className={`absolute left-0 right-0 top-full border-b border-[var(--border-light)] bg-[var(--background)] px-4 transition-all duration-200 md:hidden ${
            isOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          }`}
        >
          <div className="container flex flex-col gap-2 py-5">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-[var(--radius-md)] px-4 py-3 text-base font-medium text-[var(--muted)] transition-colors hover:bg-[var(--surface-muted)] hover:text-[var(--foreground)]"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/register"
              onClick={closeMenu}
              className="btn btn-primary mt-2 w-full"
            >
              سجّل الآن
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}