"use client";

import { useEffect, useRef } from "react";

const platforms = [
  {
    name: "Uber Eats",
    url: "https://www.ubereats.com/store/flaming-wok-express-6819-n-loop-1604-w/jesWqQ5oUFGzBiS8R-QRSg",
  },
  {
    name: "Postmates",
    url: "https://postmates.com/store/flaming-wok-express-6819-n-loop-1604-w/jesWqQ5oUFGzBiS8R-QRSg",
  },
  {
    name: "Grubhub",
    url: "https://www.grubhub.com/restaurant/flaming-wok-express-6819-north-loop-1604-west-san-antonio/13398968",
  },
];

export default function OrderOnline() {
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
      id="order"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 bg-surface relative overflow-hidden"
    >
      {/* Accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[radial-gradient(ellipse,_rgba(245,98,30,0.15)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="fade-up font-display text-4xl sm:text-5xl lg:text-6xl text-center text-text-primary tracking-wide mb-4">
          Order Your Way
        </h2>
        <p className="fade-up text-text-muted text-center text-lg mb-12" style={{ transitionDelay: "0.1s" }}>
          Pick your favorite platform and get Flaming Wok delivered.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {platforms.map((platform, i) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="fade-up card-glow bg-card border border-border-custom rounded-xl p-8 text-center group"
              style={{ transitionDelay: `${i * 0.1 + 0.2}s` }}
            >
              <h3 className="font-display text-2xl text-text-primary tracking-wide mb-3 group-hover:text-flame-orange transition-colors">
                {platform.name}
              </h3>
              <span className="text-flame-orange font-semibold text-sm uppercase tracking-wider">
                Order Now →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
