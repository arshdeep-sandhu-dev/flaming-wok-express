"use client";

import { useEffect, useRef } from "react";

const stats = [
  { icon: "🚗", label: "Drive-Thru Available" },
  { icon: "🕐", label: "Mon–Sat 11AM–9PM" },
  { icon: "📞", label: "(210) 257-0885" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
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
      id="about"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 bg-surface"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Column */}
        <div>
          <h2 className="fade-up font-display text-4xl sm:text-5xl lg:text-6xl text-flame-orange tracking-wide mb-6">
            Born in the Flame
          </h2>
          <div className="fade-up space-y-4 text-text-muted text-lg leading-relaxed" style={{ transitionDelay: "0.15s" }}>
            <p>
              Tucked along the Loop 1604 corridor on San Antonio&apos;s northwest side,
              Flaming Wok Express brings bold, wok-fired flavors to a community
              that craves something real. Every dish is cooked fresh to order in a
              blazing-hot wok — from our famous Bourbon Chicken, marinated overnight
              and grilled to perfection, to our house-specialty Flaming Wok Fried
              Rice tossed in a tangy tomato sauce.
            </p>
            <p>
              We&apos;re more than just fast — we&apos;re a neighborhood kitchen with a
              drive-thru. The kind of spot where the staff knows your order,
              offers you a sample of something new, and treats every customer like
              family. Whether you&apos;re grabbing lunch on the go or sitting down with
              loved ones, we pour the same fire and heart into every plate.
            </p>
          </div>

          {/* Stat Boxes */}
          <div
            className="fade-up grid grid-cols-3 gap-4 mt-8"
            style={{ transitionDelay: "0.3s" }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card border border-border-custom rounded-lg p-4 text-center"
              >
                <span className="text-2xl block mb-2">{stat.icon}</span>
                <span className="text-sm text-text-primary font-semibold">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Element */}
        <div className="fade-up hidden md:flex items-center justify-center" style={{ transitionDelay: "0.2s" }}>
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(245,98,30,0.2)_0%,_transparent_70%)]" />
            <div className="absolute inset-8 rounded-full bg-[radial-gradient(circle,_rgba(232,168,56,0.15)_0%,_transparent_70%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-8xl">🔥</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
