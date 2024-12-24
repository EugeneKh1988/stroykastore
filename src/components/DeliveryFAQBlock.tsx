import Container from "./Container";

interface IDeliverFAQ {
  id: number;
  qustion: string;
  answer: string;
}

const pairs: IDeliverFAQ[] = [
  {
    id: 1,
    qustion: "Водитель уведомит меня о начале доставки?",
    answer:
      "Есть товары, которые можно купить сразу на сервисе, и товары, для покупки которых нужно перейти на сайт магазина. Условия их получения отличаются.В этом разделе описаны условия для товаров, которые можно купить. Также некоторые товары, которые продаются на Маркете, доставляются непосредственно продавцамии имеют пометку об этом. Для таких товаров могут быть доступны не все возможности, описанные ниже.",
  },
  {
    id: 2,
    qustion:
      "Мне нужна помощь в разгрузке товара (дополнительная услуга), что делать?",
    answer: "Ответ",
  },
  {
    id: 3,
    qustion: "Заказ доставили, что-то от меня требуется?",
    answer: "Ответ",
  },
  {
    id: 4,
    qustion: "Что делать если товар не тот, или ненадлежащего качества?",
    answer: "Ответ",
  },
  {
    id: 5,
    qustion:
      "У меня крупный заказ (5 и более тонн груза), у вас есть доставка и разгрузка манипулятором?",
    answer: "Ответ",
  },
  {
    id: 6,
    qustion: "Сколько времени дается на самостоятельную разгрузку товара?",
    answer: "Ответ",
  },
  {
    id: 7,
    qustion:
      "Ваша доставка опоздала, как можно помочь вам улучшить свой уровень сервиса?",
    answer: "Ответ",
  },
];

const DeliveryFAQBlock = ({ className }: { className?: string }) => {
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
