import Container from "@/components/Container";
import PopCategoriesItem from "@/components/PopCategoriesItem";
import SectionHeaderBlock from "@/components/SectionHeaderBlock";
import allCategories from "@/lib/allCategories";


const CatalogPage = () => {
  const categories = allCategories()
    return (
      <>
        <SectionHeaderBlock
          title="Каталог"
          description=""
          className="mt-10 lg:max-w-[1360px] mx-auto bg-[url('../../public/catalog_block.png')] bg-no-repeat"
          links={[{ name: "Главная", url: "/" }, { name: "Каталог" }]}
        />
        <Container className="mt-[80px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-0">
            {categories.map((category, index) => (
              <div key={index} className=" text-shark">
                <PopCategoriesItem item={category} />
                <ul className="list-none mt-5">
                  {category.subCategories?.map((subCategory, innerIndex) => (
                    <li key={innerIndex} className="space-y-3 mb-3 last:mb-0">
                      <a
                        href={subCategory.url}
                        className="text-[16px] font-medium leading-6"
                      >
                        {subCategory.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </>
    );
};


export default CatalogPage;