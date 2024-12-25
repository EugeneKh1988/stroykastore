import Image from "next/image";
import positionImage from "../../public/position.svg";
import Container from "./Container";
import CityChoose from "./CityChoose";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="bg-wild-sand">
      <Container>
        <div className="navbar min-h-4">
          <div className="navbar-start">
            <div className="dropdown">
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[3] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Бренды</a>
                </li>
                <li>
                  <Link href="/delivery">Доставка</Link>
                </li>
                <li>
                  <Link href="/return">Возврат</Link>
                </li>
                <li>
                  <a>Документация</a>
                </li>
                <li>
                  <a>Контакты</a>
                </li>
              </ul>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-nowrap">
                <Image src={positionImage} alt="Position" className="mr-2" />
                <CityChoose />
              </div>
            </div>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="flex gap-[24px] text-shuttle-gray font-medium text-[15px]">
              <li>
                <a href="#">Бренды</a>
              </li>
              <li>
                <Link href="/delivery">Доставка</Link>
              </li>
              <li>
                <Link href="/return">Возврат</Link>
              </li>
              <li>
                <a href="#">Документация</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Nav;
