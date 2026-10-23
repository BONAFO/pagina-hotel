"use client";

import Link from "next/link";
import useNavbar from "@/src/hooks/main/Navbar";

export default function Navbar() {
  const {
    content,
    links,
    reservation,
    isOpen,
    toggleMenu,
    closeMenu,
    menuLabel,
  } = useNavbar();

  return (
    <header className="sticky top-0 z-50 border-b border-[#e9e0d3] bg-[#faf8f3]/95 text-[#29271f] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center border border-[#b69a6a] text-[#9a7b48]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M3 21h18M5 21V9l7-6 7 6v12M9 21v-7h6v7M3 9h18" />
            </svg>
          </div>

          <div>
            <span className="block font-serif text-xl tracking-[0.16em]">
              {content.brand.name}
            </span>
            <span className="block text-[9px] tracking-[0.32em] text-[#8d806d]">
              {content.brand.subtitle}
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative py-2 text-sm text-[#625c51] transition hover:text-[#a17d43]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Reservation CTA */}
        <div className="hidden lg:block">
          <Link
            href={reservation.href}
            className="inline-flex items-center gap-2 bg-[#a17d43] px-5 py-3 text-xs tracking-[0.12em] text-white transition hover:bg-[#806132]"
          >
            {reservation.label}
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-label={menuLabel}
          aria-expanded={isOpen}
          className="flex h-11 w-11 items-center justify-center border border-[#e3d9c9] text-[#66543b] transition hover:bg-[#f0e9dd] lg:hidden"
        >
          {isOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="border-t border-[#e9e0d3] bg-[#faf8f3] px-5 pb-6 pt-3 lg:hidden">
          <nav className="flex flex-col">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`py-4 text-sm text-[#625c51] transition hover:text-[#a17d43] ${
                  index !== links.length - 1
                    ? "border-b border-[#eee6da]"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href={reservation.href}
            onClick={closeMenu}
            className="mt-5 flex items-center justify-center gap-2 bg-[#a17d43] px-5 py-4 text-xs tracking-[0.12em] text-white transition hover:bg-[#806132]"
          >
            {reservation.label}
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      )}
    </header>
  );
}