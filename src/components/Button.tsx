import SvgIcon from "./SvgIcon";

const Button =  ({
  text,
  className,
  icon,
  iconLeft,
  onClick,
}: {
  text: string,
  className?: string,
  icon?: string,
  iconLeft?: boolean,
  onClick?: () => void,
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
  return (
    <button className={`btn ${className}`} {...onClickValue}>
      {withIcon()}
    </button>
  );
};

export default Button;
