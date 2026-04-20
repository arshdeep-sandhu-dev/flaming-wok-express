"use client";

import { useState, useEffect, useRef } from "react";

type MenuItem = {
  name: string;
  price: string;
  description?: string;
  spicy?: boolean;
  badge?: string;
};

type MenuCategory = {
  name: string;
  items: MenuItem[];
};

const menuData: MenuCategory[] = [
  {
    name: "Fan Favorites",
    items: [
      { name: "Yang Chow Fried Rice", price: "$15.74", description: "Classic Yang Chow style with a generous blend of proteins and vegetables.", badge: "#1 Most Liked" },
      { name: "Flaming Wok Fried Rice", price: "$15.69", description: "Wok fried rice tossed in a tangy tomato sauce with shrimp, chicken, and beef. Finished with fresh onions, carrots, and celery. Smoky, savory, and slightly sweet — our house specialty.", badge: "#2 Most Liked" },
      { name: "Moo-Goo Gai Pan", price: "$17.24", description: "Tender chicken and fresh mushrooms in a delicate, savory white sauce.", badge: "#3 Most Liked" },
      { name: "Orange Chicken", price: "$17.24", description: "Crispy chicken tossed in a bright, tangy-sweet orange glaze." },
      { name: "Beef with Broccoli", price: "$19.42", description: "Tender beef strips wok-tossed with crisp broccoli in a rich savory sauce." },
      { name: "Crystal Shrimp", price: "$19.54", description: "Delicate shrimp in a light, glistening sauce. Subtle and elegant." },
    ],
  },
  {
    name: "Soups",
    items: [
      { name: "Hot & Sour Soup", price: "$7.58", description: "Spicy, tangy broth loaded with wood ear mushrooms, bamboo strips, lily flowers, and egg ribbons. Earthy, bold, and invigorating.", spicy: true },
      { name: "Wonton Soup", price: "Market Price", description: "Packed with shrimp, chicken, and a crisp vegetable blend of snow peas, bamboo shoots, and carrots." },
    ],
  },
  {
    name: "Fried Rice",
    items: [
      { name: "Flaming Wok Fried Rice", price: "$15.69", description: "Wok fried rice tossed in a tangy tomato sauce with shrimp, chicken, and beef. Finished with fresh onions, carrots, and celery. Smoky, savory, and slightly sweet — our house specialty.", badge: "House Specialty" },
      { name: "Yang Chow Fried Rice", price: "$15.74", description: "Classic Yang Chow style with a generous blend of proteins and vegetables." },
      { name: "Jalapeño Chicken Fried Rice", price: "Market Price", description: "A San Antonio twist — spicy jalapeño heat meets wok-fired chicken and rice.", spicy: true },
    ],
  },
  {
    name: "Noodles",
    items: [
      { name: "Singapore Rice Noodles", price: "$16.99", description: "Thin rice noodles wok-tossed in a fragrant curry sauce with shrimp, chicken, and beef. Accented with shredded onion, celery, bean sprouts, and carrots. Vibrant, savory, lightly spiced.", spicy: true },
      { name: "Pan-Fried Noodles", price: "$17.49", description: "Crispy, golden egg noodles topped with a savory trio of shrimp, chicken, and beef. The sauce creates a perfect contrast — top layer soft and flavorful, bottom wonderfully crunchy." },
    ],
  },
  {
    name: "Entrées",
    items: [
      { name: "Kung Pao Chicken", price: "$17.24", description: "Diced chicken wok-tossed with chili peppers, onion whites, and water chestnuts in a spicy, tangy sauce. Topped with roasted peanuts for a classic, smoky crunch.", spicy: true },
      { name: "Bourbon Chicken", price: "$17.24", description: "Our Famous Bourbon Chicken — marinated overnight and grilled to perfection. A house signature.", badge: "House Signature" },
      { name: "Moo-Goo Gai Pan", price: "$17.24", description: "Tender chicken and fresh mushrooms in a delicate, savory white sauce." },
      { name: "Beef with Broccoli", price: "$19.42", description: "Tender beef strips wok-tossed with crisp broccoli in a rich savory sauce." },
      { name: "Crystal Shrimp", price: "$19.54", description: "Delicate shrimp in a light, glistening sauce. Subtle and elegant." },
      { name: "Orange Chicken", price: "$17.24", description: "Crispy chicken tossed in a bright, tangy-sweet orange glaze." },
    ],
  },
  {
    name: "Appetizers",
    items: [
      { name: "Veggie Egg Roll (1)", price: "$2.47", description: "Cabbage, carrot, celery, and onions in a crispy wrapper." },
      { name: "Pork Egg Roll (1)", price: "$3.09", description: "Golden, crispy wrapper with a savory pork filling." },
      { name: "Crab Rangoon", price: "Market Price", description: "Crispy wonton wrappers stuffed with cream cheese." },
      { name: "Pork Dumplings (6 pcs)", price: "Market Price", description: "Six steamed dumplings filled with seasoned pork." },
      { name: "Beef Pan-Fried Dumplings (6 pcs)", price: "Market Price", description: "Six pan-fried dumplings filled with seasoned beef." },
    ],
  },
  {
    name: "Drinks",
    items: [
      { name: "Fountain Drink – 24 oz", price: "$2.06" },
      { name: "Fountain Drink – 32 oz", price: "$2.64" },
      { name: "Iced Tea", price: "$2.63" },
      { name: "Bottled Water", price: "$3.21" },
    ],
  },
];

export default function FullMenu() {
  const [activeTab, setActiveTab] = useState(0);
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
      id="menu"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 bg-surface"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="fade-up font-display text-4xl sm:text-5xl lg:text-6xl text-center text-text-primary tracking-wide mb-4">
          Our Menu
        </h2>
        <p className="fade-up text-text-muted text-center text-lg mb-10" style={{ transitionDelay: "0.1s" }}>
          Every dish wok-fired to order.
        </p>

        {/* Tabs */}
        <div className="fade-up flex overflow-x-auto gap-1 mb-10 border-b border-border-custom scrollbar-hide" style={{ transitionDelay: "0.2s" }}>
          {menuData.map((category, i) => (
            <button
              key={category.name}
              onClick={() => setActiveTab(i)}
              className={`whitespace-nowrap px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-colors ${
                activeTab === i
                  ? "text-flame-orange border-b-2 border-flame-orange"
                  : "text-text-muted hover:text-text-primary"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="space-y-1">
          {menuData[activeTab].items.map((item) => (
            <div
              key={item.name}
              className="group flex flex-col py-4 px-3 -mx-3 rounded-lg border-b border-border-custom last:border-b-0 transition-all duration-300 ease-out hover:bg-card/60 hover:translate-x-1 hover:border-transparent hover:shadow-[0_0_30px_8px_rgba(245,98,30,0.18)] cursor-default"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-text-primary font-semibold text-lg transition-colors duration-300 group-hover:text-flame-orange">
                    {item.name}
                  </h3>
                  {item.spicy && (
                    <span className="text-sm" title="Spicy">🌶</span>
                  )}
                  {item.badge && (
                    <span className="bg-flame-orange/20 text-flame-orange text-xs font-bold px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className="text-gold font-semibold whitespace-nowrap">
                  {item.price}
                </span>
              </div>
              {item.description && (
                <p className="text-text-muted text-sm mt-1 leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
