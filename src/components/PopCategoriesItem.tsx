import Image from "next/image";
import { ICategory } from "./PopCategoriesBlock";

const PopCategoriesItem = ({ item }: { item: ICategory }) => {
  return (
    <a className="bg-wild-sand max-w-[180px] block text-center" href={item.url}>
      <h6 className="text-shark text-[15px] font-medium px-3 pt-3 pb-4">{item.name}</h6>
      <Image
        src={item.imageSrc}
        alt={item.name}
        width={180}
        height={128}
        className="mx-auto"
        style={{ height: "auto" }}
      />
    </a>
  );
};

export default PopCategoriesItem;
