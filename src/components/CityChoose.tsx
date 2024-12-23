'use client'

import { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import Button from "./Button";

interface ICity {
    id: number,
    name: string,
}
const _cities: ICity[] = [
  {
    id: 1,
    name: "Киев",
  },
  {
    id: 2,
    name: "Львов",
  },
  {
    id: 3,
    name: "Днепр",
  },
  {
    id: 4,
    name: "Харьков",
  },
  {
    id: 5,
    name: "Запорожье",
  },
  {
    id: 6,
    name: "Одесса",
  },
  {
    id: 7,
    name: "Тернополь",
  },
  {
    id: 8,
    name: "Днепр",
  },
  {
    id: 9,
    name: "Ивано-Франковск",
  },
  {
    id: 10,
    name: "Винница",
  },
  {
    id: 11,
    name: "Полтава",
  },
  {
    id: 12,
    name: "Хмельницкий",
  },
  {
    id: 13,
    name: "Ровно",
  },
  {
    id: 14,
    name: "Николаев",
  },
  {
    id: 15,
    name: "Житомир",
  },
]; 

const CityChoose = () => {
  const [shown, showModal] = useState(false);
  const [cityId, setCityId] = useState(0);
  const [localStorageCity, setLocalStorageCity] = useState<ICity>({} as ICity);
  const [cities, setCities] = useState<ICity[]>(_cities);

  const chooseCity = (id: number) => {
    setCityId(id);
    toLocalStorage();
  };

  // save city to localStorage
  useEffect(() => {
    toLocalStorage();
  }, [cityId]);

  // load city from localStorage
  useEffect(() => {
    const city = fromLocalStorage();
    if(city && city.id > 0 && cityId != city.id) {
        setCityId(city.id);
        cities.filter(knownCity => knownCity.id == city.id).length == 0 ? setCities([...cities, ...[city]]) : null;
    }
  }, []);

  // return name by id
  const cityName = () => {
    const cityArr = cities.filter((city) => city.id == cityId);
    return cityArr && cityArr.length > 0 ? cityArr[0].name : "Укажите город";
  };

  // set city to localStorage
  const toLocalStorage = () => {
    // update city
    if (localStorageCity.id != cityId && cityId > 0) {
      const city: ICity = { id: cityId, name: cityName() };
      localStorage.setItem("city", JSON.stringify(city));
    }
  };

  // get city from localStorage
  const fromLocalStorage = () => {
    const cityStr = localStorage.getItem("city");
    if (cityStr) {
      const city: ICity = JSON.parse(cityStr);
      setLocalStorageCity(city);
      return city;
    } else {
      return null;
    }
  };
  return (
    <>
      <a
        className="text-shuttle-gray font-medium text-[15px] cursor-pointer"
        onClick={() => showModal(true)}
      >
        {cityName()}
      </a>
      <dialog
        id="my_modal_1"
        className={`modal !bg-vulcan/60 ${shown ? "modal-open" : null}`}
      >
        <div className="modal-box bg-white max-w-[572px] rounded-none p-9">
          <h2 className="font-semibold text-[34px] text-center text-shark leading-[44.2px]">
            Выберите ваш город
          </h2>
          <SearchInput className="max-w-full mt-6" />
          <div className="mt-6 grid grid-cols-3 text-shark text-[16px] leading-6 gap-y-4">
            {cities.map((city) => (
              <a
                className="cursor-pointer hover:before:mr-1 hover:before:content-['\2192'] before:transition-all before:duration-200"
                key={city.id}
                onClick={() => chooseCity(city.id)}
              >
                {city.name}
              </a>
            ))}
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Button
                text=""
                icon="close"
                className="absolute top-2 right-2 bg-transparent p-0 text-vulcan w-[52px] h-[52px] text-[18px] rounded-none hover:bg-shark hover:text-white active:text-iron btn-ghost"
                onClick={() => showModal(false)}
              />
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default CityChoose;
