import CategoriesList from "@/components/CategoriesList";
import MainCarousel from "@/components/MainCarousel";
import Nav from "@/components/Nav";
import Toolbar from "@/components/Toolbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Nav />
      <Toolbar />
      <CategoriesList />
      <MainCarousel />
    </>
  );
}
