"use client";

import { useEffect, useRef } from "react";

const hours = [
  { day: "Monday – Saturday", time: "11:00 AM – 9:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function Location() {
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
      id="location"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 bg-charcoal"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="fade-up font-display text-4xl sm:text-5xl lg:text-6xl text-center text-text-primary tracking-wide mb-12">
          Find Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Info Column */}
          <div className="fade-up" style={{ transitionDelay: "0.1s" }}>
            <h3 className="font-display text-2xl text-flame-orange tracking-wide mb-6">
              Hours & Location
            </h3>

            {/* Hours */}
            <div className="space-y-3 mb-8">
              {hours.map((row) => (
                <div
                  key={row.day}
                  className="flex justify-between py-2 border-b border-border-custom"
                >
                  <span className="text-text-primary font-semibold">
                    {row.day}
                  </span>
                  <span
                    className={
                      row.time === "Closed"
                        ? "text-ember-red font-semibold"
                        : "text-text-muted"
                    }
                  >
                    {row.time}
                  </span>
                </div>
              ))}
            </div>

            {/* Address */}
            <div className="space-y-4">
              <div>
                <h4 className="text-text-muted text-sm uppercase tracking-wider mb-1">
                  Address
                </h4>
                <p className="text-text-primary text-lg">
                  6819 N Loop 1604 W
                  <br />
                  San Antonio, TX 78249
                </p>
              </div>

              <div>
                <h4 className="text-text-muted text-sm uppercase tracking-wider mb-1">
                  Phone
                </h4>
                <a
                  href="tel:+12102570885"
                  className="text-flame-orange text-lg hover:text-gold transition-colors"
                >
                  (210) 257-0885
                </a>
              </div>

              <a
                href="https://maps.google.com/maps?q=6819+N+Loop+1604+W+San+Antonio+TX+78249"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-flame-orange hover:bg-ember-red text-white px-6 py-3 rounded-full font-semibold transition-colors mt-2"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Map */}
          <div
            className="fade-up rounded-xl overflow-hidden border border-border-custom"
            style={{ transitionDelay: "0.2s" }}
          >
            <iframe
              src="https://maps.google.com/maps?q=6819+N+Loop+1604+W+San+Antonio+TX+78249&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Flaming Wok Express Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
