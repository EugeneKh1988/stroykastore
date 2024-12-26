import popularCategories, { ICategory } from "@/lib/popularCategories";
import Container from "./Container";
import PopCategoriesItem from "./PopCategoriesItem";
import SectionCaption from "./SectionCaption";

const PopCategoriesBlock = () => {
  const categories: ICategory[] = popularCategories();
  return (
    <Container className="mt-[80px]">
      <SectionCaption
        title="Популярные категории"
        actionCaption="Все категории"
      />
      <div className="flex gap-4 flex-wrap mt-4 justify-center lg:justify-start">
        {categories.map((item, index) => (
          <PopCategoriesItem item={item} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default PopCategoriesBlock;
