import Container from "./Container";

const CategoriesList = () => {
  return (
    <div className="mt-4 border-y-[1px] border-y-mercury py-[10px] text-right">
      <Container width={1196}>
        <ul className="hidden lg:flex gap-[30px] text-mako font-medium text-[16px] justify-between">
          <li>
            <a href="#">Акции</a>
          </li>
          <li>
            <a href="#">Строительные материалы</a>
          </li>
          <li>
            <a href="#">Керамическая плитка</a>
          </li>
          <li>
            <a href="#">Краски</a>
          </li>
          <li>
            <a href="#">Сантехника</a>
          </li>
          <li>
            <a href="#">Напольные покрытия</a>
          </li>
          <li>
            <a href="#">Инструменты</a>
          </li>
          <li>
            <a href="#">Обои</a>
          </li>
          <li>
            <a href="#">Окна</a>
          </li>
        </ul>
        <div className="dropdown dropdown-end lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-outline p-1"
          >
            Категории
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="#">Акции</a>
            </li>
            <li>
              <a href="#">Строительные материалы</a>
            </li>
            <li>
              <a href="#">Керамическая плитка</a>
            </li>
            <li>
              <a href="#">Краски</a>
            </li>
            <li>
              <a href="#">Сантехника</a>
            </li>
            <li>
              <a href="#">Напольные покрытия</a>
            </li>
            <li>
              <a href="#">Инструменты</a>
            </li>
            <li>
              <a href="#">Обои</a>
            </li>
            <li>
              <a href="#">Окна</a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default CategoriesList;
