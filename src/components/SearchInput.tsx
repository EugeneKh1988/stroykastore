import Image from "next/image";
import findImage from "../../public/find.svg";

const SearchInput = () => {
  return (
    <label
      className="flex input border-0 border-b-[1px] border-iron rounded-none max-w-[444px] 
        outline-none focus:outline-none focus-within:outline-none
        bg-wild-sand placeholder:text-oslo-gray text-mako text-[18px] font-medium items-center gap-2 grow"
    >
      <input
        type="text"
        className="grow hover:cursor-pointer"
        placeholder="Поиск"
      />
      <Image src={findImage} alt="Icon" />
    </label>
  );
};

export default SearchInput;
