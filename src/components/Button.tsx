import Image from "next/image";
import logoImage from "../../public/Logo.svg";

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
            <Image src={`/${icon}`} alt="Icon" width={24} height={24} />
            {text}
          </>
        );
      }
      else {
        return (
          <>
            {text}
            <Image src={`/${icon}`} alt="Icon" width={24} height={24} />
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
