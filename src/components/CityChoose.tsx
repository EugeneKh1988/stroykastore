'use client'

import { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import Button from "./Button";
import useSWR from "swr";
import { ICity } from "@/app/api/cities/route";

const CityChoose = () => {
  const [cityQuery, setCityQuery] = useState("popular");
  // fetch cities
  const fetcher = (args: string) => fetch(args).then((res) => res.json());
  const { data, error, isLoading } = useSWR<ICity[]>(`/api/cities?query=${cityQuery}`, fetcher);

  const [shown, showModal] = useState(false);
  const [cityId, setCityId] = useState(0);
  const [localStorageCity, setLocalStorageCity] = useState<ICity>({} as ICity);
  const [cities, setCities] = useState<ICity[]>([]);

  const chooseCity = (id: number) => {
    setCityId(id);
    toLocalStorage();
  };

  // set query to find city
  const findCity = (cityName:string) => {
    if(cityName != "") {
      setCityQuery(cityName);
    }
    else {
      setCityQuery("popular");
    }
  };

  // save loaded cities
  useEffect(() => {
    if(data && !error) {
      setCities(data);
    }
    else {
      setCities([]);
    }
  }, [data]);

  // save city to localStorage
  useEffect(() => {
    toLocalStorage();
  }, [cityId]);

  // load city from localStorage
  useEffect(() => {
    const city = fromLocalStorage();
    if(city && city.id > 0 && cityId != city.id) {
        setCityId(city.id);
        const filterCitities = cities.filter(knownCity => knownCity.id == city.id);
        if(filterCitities.length == 0) {
            setCities([...cities, ...[city]]);
        }
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
          <SearchInput className="max-w-full mt-6" onChange={(e) => setCityQuery(e.currentTarget.value)} />
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
