import Button from "./Button";
import Container from "./Container";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import ToolbarButton from "./ToolbarButton";

const Toolbar = () => {
  return (
    <Container width={1196}>
      <div className="flex lg:justify-between mt-4">
        <Logo />
        <div className="flex justify-end gap-4 grow">
          <Button
            text="Каталог"
            icon="btn_cat.svg"
            iconLeft
            className="bg-gorse text-vulcan text-[18px] font-medium rounded-none"
          />
          <SearchInput />
        </div>
        <div className="hidden lg:flex">
          <ToolbarButton
            text="Профиль"
            icon="profile.svg"
            className="text-[15px] text-mako px-4"
            href="#"
          />
          <ToolbarButton
            text="Заказы"
            icon="order.svg"
            className="text-[15px] text-mako px-4"
            href="#"
          />
          <ToolbarButton
            text="Корзина"
            icon="cart.svg"
            className="text-[15px] text-mako px-4"
            href="#"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="#">Профиль</a>
            </li>
            <li>
              <a href="#">Заказы</a>
            </li>
            <li>
              <a href="#">Корзина</a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Toolbar;