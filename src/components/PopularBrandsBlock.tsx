import popularBrands, { IBrand } from "@/lib/popularBrands";
import Container from "./Container";
import SectionCaption from "./SectionCaption";
import Image from "next/image";

const PopularBrandsBlock = () => {
  const brands: IBrand[] = popularBrands();
  return (
    <Container className="mt-[82px]">
      <SectionCaption title="Популярные бренды" actionCaption="Все бренды" />
      <div className="flex gap-4 flex-wrap mt-4 justify-center lg:justify-start">
        {brands.map((item, index) => (
          <a
            className="mx-auto max-w-[180px] border-[1px] border-mercury hover:border-shuttle-gray block"
            key={index}
            href={item.url}
          >
            <Image
              src={item.imageSrc}
              alt="Brand name"
              width={180}
              height={124}
              className="mx-auto"
              style={{ height: "auto" }}
            />
          </a>
        ))}
      </div>
    </Container>
  );
};

export default PopularBrandsBlock;
