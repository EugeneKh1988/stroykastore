import CategoriesList from "@/components/CategoriesList";
import DiscountsBlock from "@/components/DiscountsBlock";
import MainCarousel from "@/components/MainCarousel";
import Nav from "@/components/Nav";
import PopCategoriesBlock from "@/components/PopCategoriesBlock";
import PopularBrandsBlock from "@/components/PopularBrandsBlock";
import PopularGoodsBlock from "@/components/PopularGoodsBlock";
import Toolbar from "@/components/Toolbar";

export default function Home() {
  return (
    <>
      <Nav />
      <Toolbar />
      <CategoriesList />
      <MainCarousel />
      <DiscountsBlock />
      <PopCategoriesBlock />
      <PopularGoodsBlock />
      <PopularBrandsBlock />
    </>
  );
}
