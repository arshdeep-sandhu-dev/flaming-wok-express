"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type FeaturedDish = {
  name: string;
  price: string;
  description: string;
  image: string;
  badge?: string;
};

const featuredDishes: FeaturedDish[] = [
  {
    name: "Yang Chow Fried Rice",
    price: "$15.74",
    description:
      "Classic Yang Chow style with a generous blend of proteins and vegetables.",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&h=400&fit=crop",
    badge: "Fan Favorite",
  },
  {
    name: "Flaming Wok Fried Rice",
    price: "$15.69",
    description:
      "Wok fried rice tossed in a tangy tomato sauce with shrimp, chicken, and beef. Our house specialty.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop",
    badge: "Fan Favorite",
  },
  {
    name: "Moo-Goo Gai Pan",
    price: "$17.24",
    description:
      "Tender chicken and fresh mushrooms in a delicate, savory white sauce.",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&h=400&fit=crop",
  },
  {
    name: "Orange Chicken",
    price: "$17.24",
    description:
      "Crispy chicken tossed in a bright, tangy-sweet orange glaze.",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&h=400&fit=crop",
  },
  {
    name: "Kung Pao Chicken",
    price: "$17.24",
    description:
      "Diced chicken wok-tossed with chili peppers, onion, and water chestnuts. Topped with roasted peanuts.",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&h=400&fit=crop",
  },
  {
    name: "Bourbon Chicken",
    price: "$17.24",
    description:
      "Our Famous Bourbon Chicken — marinated overnight and grilled to perfection. A house signature.",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&h=400&fit=crop",
  },
];

export default function FeaturedDishes() {
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
        <h2 className="fade-up font-display text-4xl sm:text-5xl lg:text-6xl text-center text-text-primary tracking-wide mb-4">
          San Antonio&apos;s Favorites
        </h2>
        <p className="fade-up text-text-muted text-center text-lg mb-12 max-w-2xl mx-auto" style={{ transitionDelay: "0.1s" }}>
          The dishes our community can&apos;t stop ordering.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDishes.map((dish, i) => (
            <div
              key={dish.name}
              className="fade-up card-glow bg-card border border-border-custom rounded-xl overflow-hidden group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized
                />
                {dish.badge && (
                  <span className="absolute top-3 left-3 bg-flame-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {dish.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-xl text-text-primary tracking-wide">
                    {dish.name}
                  </h3>
                  <span className="text-gold font-semibold">{dish.price}</span>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
