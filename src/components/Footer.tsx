const deliveryLinks = [
  { name: "Uber Eats", url: "https://www.ubereats.com/store/flaming-wok-express-6819-n-loop-1604-w/jesWqQ5oUFGzBiS8R-QRSg" },
  { name: "Postmates", url: "https://postmates.com/store/flaming-wok-express-6819-n-loop-1604-w/jesWqQ5oUFGzBiS8R-QRSg" },
  { name: "Grubhub", url: "https://www.grubhub.com/restaurant/flaming-wok-express-6819-north-loop-1604-west-san-antonio/13398968" },
];

const socialLinks = [
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "TikTok", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border-custom py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🔥</span>
              <span className="font-display text-xl text-text-primary tracking-wide">
                Flaming Wok Express
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              6819 N Loop 1604 W
              <br />
              San Antonio, TX 78249
            </p>
            <a
              href="tel:+12102570885"
              className="text-flame-orange text-sm hover:text-gold transition-colors mt-2 inline-block"
            >
              (210) 257-0885
            </a>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg text-text-primary tracking-wide mb-4">
              Hours
            </h4>
            <p className="text-text-muted text-sm">Mon – Sat: 11AM – 9PM</p>
            <p className="text-text-muted text-sm">Sunday: Closed</p>
          </div>

          {/* Order Online */}
          <div>
            <h4 className="font-display text-lg text-text-primary tracking-wide mb-4">
              Order Online
            </h4>
            <div className="space-y-2">
              {deliveryLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-text-muted text-sm hover:text-flame-orange transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg text-text-primary tracking-wide mb-4">
              Follow Us
            </h4>
            <div className="space-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-text-muted text-sm hover:text-flame-orange transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border-custom text-center">
          <p className="text-text-muted text-sm">
            © 2025 Flaming Wok Express — San Antonio, TX
          </p>
        </div>
      </div>
    </footer>
  );
}
