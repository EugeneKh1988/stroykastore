import Image from "next/image";
import BuyBtn from "./BuyBtn";
import { IGood } from "@/lib/popularGoods";

const DiscountItem = ({
  item,
}: {
  item: IGood;
}) => {
  return (
    <div className="flex">
      <div className="mx-auto overflow-hidden max-w-[278px] border-[1px] border-mercury relative">
        <Image
          src={item.imageSrc}
          alt={item.name}
          width={278}
          height={208}
          style={{ height: "auto" }}
        />
        <div className="absolute border-[1px] border-turbo text-vulcan text-[15px] top-[20px] left-[24px] px-1">
          {item.discount}%
        </div>
      </div>
      <div className="p-4 border-[1px] border-mercury border-l-0">
        <a
          className="block h-[72px] max-w-[262px] text-ellipsis text-shark text-[16px] font-medium leading-6"
          href={item.url}
        >
          {item.name}
        </a>
        <p className="mt-3">
          <span className="mr-2 font-bold text-vulcan text-[20px] leading-7">
            {item.currentPrice} ₽
          </span>
          <span className="text-oslo-gray text-[16px] leading-6 font-medium line-through">
            {item.oldPrice} ₽
          </span>
        </p>
        <BuyBtn good={item} text="В корзину" />
      </div>
    </div>
  );
};

export default DiscountItem;
