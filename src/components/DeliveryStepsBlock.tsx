import Container from "./Container";
import Image from "next/image";

interface IDeliverStep {
  id: number,
  imageSrc: string
  description: string,
}

const steps: IDeliverStep[] = [
  {
    id: 1,
    imageSrc: "/cart_color.svg",
    description: "Добавьте нужные товары в корзину и оплатите заказ",
  },
  {
    id: 2,
    imageSrc: "/notice_color.svg",
    description: "Получите уведомления о подтверждении вашего заказа",
  },
  {
    id: 3,
    imageSrc: "/order_color.svg",
    description: "После подтверждения мы сформируем ваш заказ",
  },
  {
    id: 4,
    imageSrc: "/location_color.svg",
    description: "Заберите из пунктов выдачи",
  },
];

const DeliveryStepsBlock = ({
  className,
}: {
  className?: string;
}) => {
  const classNameValue = className ? { className } : {};
  return (
    <Container {...classNameValue}>
      <h2 className="text-shark text-[34px] font-semibold leading-[44.2px] mb-8">
        Как сделать заказ: 4 простых шага
      </h2>
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        {steps.map((step) => (
          <div key={step.id} className="max-w-[278px] flex-auto">
            <Image
              src={step.imageSrc}
              alt={`Step ${step.id}`}
              width={80}
              height={80}
              style={{ height: "auto" }}
            />
            <p className="text-shark text-[16px] font-medium leading-6 mt-3 pr-4">{step.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default DeliveryStepsBlock;
