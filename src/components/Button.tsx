import Image from "next/image";
import SvgIcon from "./SvgIcon";

const Button =  ({
  text,
  className,
  icon,
  iconLeft
}: {
  text: string,
  className?: string,
  icon?: string,
  iconLeft?: boolean,
}) => {
  //const btnIcon = icon ?  await import(`../../public/${icon}`) : "";
 
  const withIcon = () => {
    if(icon) {
      if(iconLeft) {
        return (
          <>
            <SvgIcon iconName={icon} />
            {text}
          </>
        );
      }
      else {
        return (
          <>
            {text}
            <SvgIcon iconName={icon} />
          </>
        );
      }
    }
    else {
      return (
        <>
          {text}
        </>)
    }
  };
  return (
    <button className={`btn ${className}`}>
      {withIcon()}
    </button>
  );
};

export default Button;
