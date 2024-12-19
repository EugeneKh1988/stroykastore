import Image from "next/image";

const ToolbarButton = async ({
  text,
  href,
  className,
  icon,
}: {
  text: string;
  href?: string;
  className?: string;
  icon?: string;
}) => {

  const hrefValue = href ? {href} : {};
  const classNameValue = className ? {className}: {};
  return (
    <a {...classNameValue} {...hrefValue}>
      <div className="flex justify-center">
        <Image src={`/${icon}`} alt="Icon" width={24} height={24} />
      </div>
      {text}
    </a>
  );
};

export default ToolbarButton;
