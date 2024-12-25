import DeliveryFAQBlock from "@/components/DeliveryFAQBlock";
import DeliveryStepsBlock from "@/components/DeliveryStepsBlock";
import SectionHeaderBlock from "@/components/SectionHeaderBlock";


const Delivery = () => {
    return (
      <>
        <SectionHeaderBlock
          title="Доставка"
          description="Доставка осуществляется курьерами поставщика или службой курьеров Достависта. Также товар можно забрать самостоятельно от поставщика"
          className="mt-10 lg:max-w-[1360px] mx-auto bg-[url('../../public/delivery_block.png')] bg-no-repeat"
          links={[{ name: "Главная", url: "/" }, { name: "Доставка" }]}
        />
        <DeliveryStepsBlock className="mt-[80px]" />
        <DeliveryFAQBlock className="mt-[80px]" />
      </>
    );
};


export default Delivery;