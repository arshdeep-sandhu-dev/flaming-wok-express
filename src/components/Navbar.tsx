"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Order Online", href: "#order" },
  { label: "Location", href: "#location" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal/90 backdrop-blur-md border-b border-border-custom"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl">🔥</span>
            <span className="font-display text-xl sm:text-2xl tracking-wide text-text-primary">
              Flaming Wok Express
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-muted hover:text-text-primary transition-colors text-sm uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#order"
              className="bg-flame-orange hover:bg-ember-red text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-text-primary p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-charcoal/98 backdrop-blur-lg mobile-menu-enter">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-text-primary text-3xl font-display tracking-wider hover:text-flame-orange transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#order"
              onClick={() => setIsOpen(false)}
              className="bg-flame-orange hover:bg-ember-red text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors mt-4"
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
