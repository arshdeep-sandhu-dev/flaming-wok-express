import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedDishes from "@/components/FeaturedDishes";
import FullMenu from "@/components/FullMenu";
import Highlights from "@/components/Highlights";
import OrderOnline from "@/components/OrderOnline";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <FeaturedDishes />
      <FullMenu />
      <Highlights />
      <OrderOnline />
      <Location />
      <Footer />
    </main>
  );
}
