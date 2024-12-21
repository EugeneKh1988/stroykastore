import AboutBlock from "@/components/AboutBlock";
import CategoriesList from "@/components/CategoriesList";
import DiscountsBlock from "@/components/DiscountsBlock";
import FooterBlock from "@/components/FooterBlock";
import MainCarousel from "@/components/MainCarousel";
import Nav from "@/components/Nav";
import PopCategoriesBlock from "@/components/PopCategoriesBlock";
import PopularBrandsBlock from "@/components/PopularBrandsBlock";
import PopularGoodsBlock from "@/components/PopularGoodsBlock";
import ReviewBlock from "@/components/ReviewBlock";
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
      <ReviewBlock />
      <AboutBlock />
      <FooterBlock />
    </>
  );
}
