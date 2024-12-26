import { IGood } from "@/lib/popularGoods";
import Container from "./Container";
import DiscountItem from "./DiscountItem";
import SectionCaption from "./SectionCaption";
import discountGoods from "@/lib/discountGoods";

const DiscountsBlock = () => {
  const goods:IGood[] = discountGoods();
  return (
    <Container className="mt-[82px]">
      <SectionCaption title="Акции" actionCaption="Все акции" />
      <div className="flex gap-4 flex-wrap mt-4 justify-center lg:justify-start">
        {goods.map((item, index) => (
          <DiscountItem item={item} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default DiscountsBlock;
