import Link from "next/link";
import SvgIcon from "./SvgIcon";

const Button =  ({
  text,
  className,
  icon,
  iconLeft,
  onClick,
  href,
}: {
  text: string,
  className?: string,
  icon?: string,
  iconLeft?: boolean,
  onClick?: () => void,
  href?: string,
}) => {
  //const btnIcon = icon ?  await import(`../../public/${icon}`) : "";
  const onClickValue = onClick ? {onClick} : {};
 
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

  const buttonOrLink:() => React.ReactNode = () => {
    if(href) {
      return (
        <Link className={`btn ${className}`} {...{href}}>
          {withIcon()}
        </Link>
      );
    }
    return (
      <button className={`btn ${className}`} {...onClickValue}>
        {withIcon()}
      </button>
    );
  };
  return <>{buttonOrLink()}</>;
};

export default Button;
