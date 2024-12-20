import Image from "next/image";
import Container from "./Container";


const FooterBlock = () => {
  return (
    <div className="bg-shark">
      <Container className="mt-[40px]">
        <div className="flex gap-5 flex-wrap pt-10 justify-center lg:justify-between text-white text-[16px] font-medium pb-10 border-b-[1px] border-shuttle-gray">
          <div>
            <a className="flex gap-2 items-center font-bold" href="#">
              <Image
                src="/logo.png"
                alt="Logo"
                width={38}
                height={45}
                style={{ height: "auto" }}
              />
              <p>StroykaStore</p>
            </a>
            <div className="flex gap-2 items-center mt-[22px]">
              <Image
                src="/mail.svg"
                alt="Logo"
                width={24}
                height={24}
                style={{ height: "auto" }}
              />
              <p>info@stroykastore.ru</p>
            </div>
            <div className="flex gap-2 items-center mt-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 8.33301C17.5 14.1663 10 19.1663 10 19.1663C10 19.1663 2.5 14.1663 2.5 8.33301C2.5 6.34388 3.29018 4.43623 4.6967 3.02971C6.10322 1.62318 8.01088 0.833008 10 0.833008C11.9891 0.833008 13.8968 1.62318 15.3033 3.02971C16.7098 4.43623 17.5 6.34388 17.5 8.33301Z"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 10.833C11.3807 10.833 12.5 9.71372 12.5 8.33301C12.5 6.9523 11.3807 5.83301 10 5.83301C8.61929 5.83301 7.5 6.9523 7.5 8.33301C7.5 9.71372 8.61929 10.833 10 10.833Z"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p>Киев</p>
            </div>
          </div>
          <ul className="list-none space-y-3">
            <li>
              <a href="#">Личный кабинет</a>
            </li>
            <li>
              <a href="#">Заказы</a>
            </li>
            <li>
              <a href="#">Избранное</a>
            </li>
            <li>
              <a href="#">Корзина</a>
            </li>
          </ul>
          <ul className="list-none space-y-3">
            <li>
              <a href="#">Каталог</a>
            </li>
            <li>
              <a href="#">Акции</a>
            </li>
            <li>
              <a href="#">Бренды</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </ul>
          <ul className="list-none space-y-3">
            <li>
              <a href="#">Стать продавцом</a>
            </li>
            <li>
              <a href="#">Доставка</a>
            </li>
            <li>
              <a href="#">Возврат</a>
            </li>
            <li>
              <a href="#">Документация</a>
            </li>
          </ul>
        </div>
        <div className="py-[22px] text-iron text-[16px] font-medium">
          <p>© СтройкаСтор</p>
        </div>
      </Container>
    </div>
  );
};

export default FooterBlock;
