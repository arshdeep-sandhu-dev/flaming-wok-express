"use client";

import { useEffect, useRef } from "react";

const highlights = [
  {
    icon: "🚗",
    title: "Drive-Thru Available",
    description: "Quick and convenient on Loop 1604",
  },
  {
    icon: "🔥",
    title: "Wok-Fired to Order",
    description: "Every dish made fresh in the flame",
  },
  {
    icon: "🌶",
    title: "Bold, Authentic Flavors",
    description: "From Kung Pao to our signature Bourbon Chicken",
  },
  {
    icon: "🤝",
    title: "Friendly Local Service",
    description: "Family-run, community-first",
  },
];

export default function Highlights() {
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
    <section ref={sectionRef} className="py-20 sm:py-28 px-4 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className="fade-up card-glow bg-card border border-border-custom rounded-xl p-6 text-center"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="text-4xl block mb-4">{item.icon}</span>
              <h3 className="font-display text-lg sm:text-xl text-text-primary tracking-wide mb-2">
                {item.title}
              </h3>
              <p className="text-text-muted text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
