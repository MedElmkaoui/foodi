import Catagories from "@/components/sections/Catagories";
import Header from "@/components/sections/Header";
import SpecialDishes from "@/components/sections/SpecialDishes";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Catagories />
      <SpecialDishes />
    </main>
  );
}
