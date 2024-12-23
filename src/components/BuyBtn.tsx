"use client";

import { useEffect, useState } from "react";
import { IGood } from "./PopularGoodsBlock";
import Button from "./Button";

interface ICartGood extends IGood {
  count: number,
}

interface IStorageGoods {
  [goodId: number]: ICartGood;
}

const BuyBtn = ({ good, text }: { good: IGood; text: string }) => {
  //const btnIcon = icon ?  await import(`../../public/${icon}`) : "";
  const [viewBuyBtn, showBuyBtn] = useState(true);
  const [buyCount, setBuyCount] = useState(0);
  const [localStorageGoods, setLocalStorageGoods] = useState<IStorageGoods>({});

  useEffect(() => {
    // show buy button if count equel to 0
    if (buyCount == 0 && viewBuyBtn == false) {
      showBuyBtn(true);
    }
    // hide buy button if count greater than 0
    if (buyCount > 0 && viewBuyBtn == true) {
      showBuyBtn(false);
    }
  });

   useEffect(() => {
     // to local storage
     if (buyCount >= 0) {
       toLocalStorage();
     }
   }, [buyCount]);

   useEffect(() => {
     // first load from localStorage
     const cartGoods = fromLocalStorage();
     setGoodCount(cartGoods);
   }, []);

  // set good to localStorage
  const toLocalStorage = () => {
    // good is in localStorage
    if(localStorageGoods && localStorageGoods[good.id]) {
      // update count
      if(buyCount > 0) {
        let copyGoods = fromLocalStorage();
        copyGoods[good.id].count = buyCount;
        setLocalStorageGoods(copyGoods);
        localStorage.setItem("cartGoods", JSON.stringify(copyGoods));
      }
      else {
        // remove if count is 0 
        let copyGoods = fromLocalStorage();
        delete copyGoods[good.id];
        setLocalStorageGoods(copyGoods);
        localStorage.setItem("cartGoods", JSON.stringify(copyGoods));
      }
    } 
    else {
      // good is not in localStorage
      if(buyCount > 0) {
        // update count 
        const cartGood: ICartGood = { ...good, count: buyCount };
        let copyGoods = fromLocalStorage();
        copyGoods[good.id] = cartGood;
        setLocalStorageGoods(copyGoods);
        localStorage.setItem("cartGoods", JSON.stringify(copyGoods));
      }
    }
  };

  // get goods from localStorage
  const fromLocalStorage = () => {
    const cartGoodsStr = localStorage.getItem("cartGoods");
    if(cartGoodsStr) {
      const cartGoods: IStorageGoods = JSON.parse(cartGoodsStr);
      setLocalStorageGoods(cartGoods);
      return cartGoods;
    }
    else {
      return {};
    }
  };

  // set buy count from localStorage
  const setGoodCount = (cartGoods: IStorageGoods) => {
    if(cartGoods && cartGoods[good.id]) {
      const cartGood = cartGoods[good.id];
      if(cartGood.count > 0 && buyCount != cartGood.count) {
        setBuyCount(cartGood.count);
      }
    }
  };

  const onBuyGood = () => {
    // hide buy btn
    if (viewBuyBtn) {
      showBuyBtn(false);
    }
    // increase buy counter
    if (buyCount == 0) {
      setBuyCount(1);
    }
  };

  const onIncrement = () => {
    if (buyCount >= 1) {
      setBuyCount((prev) => prev + 1);
    }
  };

  const onDecrement = () => {
    if (buyCount >= 1) {
      setBuyCount((prev) => prev - 1);
    }
  };

  const onChangeBuyCount = (countStr: string) => {
    const count = parseInt(countStr);
    if (!isNaN(count) && count >= 0) {
      setBuyCount(count);
    } else {
        setBuyCount(0);
    }
  };

  const btn: () => React.ReactElement = () => {
    return (
      <>
        <Button
          text={text}
          className="bg-gorse text-vulcan text-[18px] font-medium rounded-none mt-4 w-full hover:bg-shark hover:text-white active:text-iron"
          onClick={() => onBuyGood()}
        />
      </>
    );
  };

  const countBtns: () => React.ReactNode = () => {
    return (
      <div className="flex flex-nowrap gap-0 mt-4">
        <Button
          text=""
          icon="plus"
          className="bg-white p-0 text-vulcan w-[48px] h-[48px] text-[18px] rounded-none hover:bg-shark hover:text-white active:text-iron"
          onClick={() => onIncrement()}
        />
        <input
          type="number"
          value={buyCount}
          onChange={(e) => onChangeBuyCount(e.currentTarget.value)}
          className="max-w-[152px] w-full text-center border-y-[1px] border-y-iron hover:cursor-pointer text-[18px] text-vulcan focus-visible:outline-none"
        />
        <Button
          text=""
          icon="minus"
          className="bg-white p-0 border-[1px] border-iron text-vulcan w-[48px] h-[48px] text-[18px] rounded-none hover:bg-shark hover:text-white active:text-iron"
          onClick={() => onDecrement()}
        />
      </div>
    );
  };

  return <>{viewBuyBtn ? btn() : countBtns()}</>;
};

export default BuyBtn;
