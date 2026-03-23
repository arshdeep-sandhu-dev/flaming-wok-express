"use client";

import { useEffect, useRef } from "react";

const embers = [
  { left: "10%", delay: "0s", duration: "4s" },
  { left: "25%", delay: "1.2s", duration: "5s" },
  { left: "40%", delay: "0.5s", duration: "4.5s" },
  { left: "55%", delay: "2s", duration: "3.8s" },
  { left: "70%", delay: "0.8s", duration: "4.2s" },
  { left: "85%", delay: "1.5s", duration: "5.2s" },
  { left: "50%", delay: "2.5s", duration: "3.5s" },
  { left: "15%", delay: "3s", duration: "4.8s" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-up");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay"
    >
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-charcoal">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(192,57,43,0.3)_0%,_rgba(245,98,30,0.1)_30%,_transparent_70%)]" />
      </div>

      {/* Ember particles */}
      {embers.map((ember, i) => (
        <div
          key={i}
          className="ember"
          style={{
            left: ember.left,
            bottom: "0",
            animationDelay: ember.delay,
            animationDuration: ember.duration,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-display tracking-wider">
          <span className="fade-up block text-6xl sm:text-8xl lg:text-9xl text-flame-orange">
            FIRE.
          </span>
          <span
            className="fade-up block text-6xl sm:text-8xl lg:text-9xl text-gold"
            style={{ transitionDelay: "0.15s" }}
          >
            FLAVOR.
          </span>
          <span
            className="fade-up block text-6xl sm:text-8xl lg:text-9xl text-text-primary"
            style={{ transitionDelay: "0.3s" }}
          >
            SAN ANTONIO.
          </span>
        </h1>

        <p
          className="fade-up mt-6 sm:mt-8 text-lg sm:text-xl text-text-muted max-w-xl mx-auto"
          style={{ transitionDelay: "0.45s" }}
        >
          Prepare your taste buds. Wok-fired fresh, every order.
        </p>

        <div
          className="fade-up flex flex-col sm:flex-row gap-4 justify-center mt-8 sm:mt-10"
          style={{ transitionDelay: "0.6s" }}
        >
          <a
            href="#menu"
            className="bg-flame-orange hover:bg-ember-red text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
          >
            See Our Menu
          </a>
          <a
            href="#order"
            className="border border-text-muted hover:border-flame-orange text-text-primary hover:text-flame-orange px-8 py-3 rounded-full text-lg font-semibold transition-colors"
          >
            Order Online Now
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-indicator">
        <svg
          className="w-6 h-6 text-text-muted"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
