import Catagories from "@/components/sections/Catagories";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Services from "@/components/sections/Services";
import SpecialDishes from "@/components/sections/SpecialDishes";
import Testimonials from "@/components/sections/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Catagories />
      <SpecialDishes />
      <Testimonials />
      <Services />
      <Footer />
    </main>
  );
}
