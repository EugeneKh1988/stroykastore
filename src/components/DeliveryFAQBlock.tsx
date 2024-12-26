import DeliveryFAQ, { IDeliverFAQ } from "@/lib/deliveryFAQ";
import Container from "./Container";

const DeliveryFAQBlock = ({ className }: { className?: string }) => {
  const pairs:IDeliverFAQ[] = DeliveryFAQ();
  const classNameValue = className ? { className } : {};
  return (
    <Container {...classNameValue}>
      <div className="mx-auto border-[1px] border-iron py-20 px-4 flex flex-col justify-center items-center">
        <div className="max-w-[768px]">
          <h2 className="text-shark text-[34px] font-semibold leading-[44.2px]">
            Часто задаваемые вопросы
          </h2>
          <div className="mt-5 text-shark">
            {pairs.map((pair) => (
              <div
                tabIndex={0}
                className="collapse collapse-arrow border-none bg-wild-sand mt-3 rounded-none"
                key={pair.id}
              >
                <div className="collapse-title text-[18px] font-medium">
                  {pair.qustion}
                </div>
                <div className="collapse-content text-[16px] font-normal">
                  <p className="pr-[40px]">{pair.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DeliveryFAQBlock;
