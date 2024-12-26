import Image from "next/image";
import findImage from "../../public/find.svg";
import { ChangeEvent } from "react";

const SearchInput = ({ className, onChange }: { className?: string, onChange?: (e:ChangeEvent<HTMLInputElement>) => void }) => {
  const classNameValue = className ? className : "";
  const onChangeValue = onChange ? {onChange} : {};
  return (
    <label
      className={`flex input border-0 border-b-[1px] border-iron rounded-none max-w-[444px] 
        outline-none focus:outline-none focus-within:outline-none
        bg-wild-sand placeholder:text-oslo-gray text-mako text-[18px] font-medium items-center gap-2 grow ${classNameValue}`}
    >
      <input
        type="text"
        className="grow hover:cursor-pointer"
        placeholder="Поиск"
        {...onChangeValue}
      />
      <Image src={findImage} alt="Icon" />
    </label>
  );
};

export default SearchInput;
