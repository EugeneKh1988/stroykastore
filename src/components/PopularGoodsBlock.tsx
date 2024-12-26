import popularGoods, { IGood } from "@/lib/popularGoods";
import Container from "./Container";
import GoodItem from "./GoodItem";
import SectionCaption from "./SectionCaption";

const PopularGoodsBlock = () => {
  const goods: IGood[] = popularGoods();
  return (
    <Container className="mt-[80px]">
      <SectionCaption title="Популярные товары" noAction />
      <div className="flex gap-4 flex-wrap mt-4 justify-center lg:justify-start">
        {goods.map((item, index) => (
          <GoodItem item={item} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default PopularGoodsBlock;
