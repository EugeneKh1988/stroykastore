
const Container = ({
  children,
  width,
  className,
}: {
  children: React.ReactNode;
  width: number;
  className?: string;
}) => {
  const classNameValue = className ? `${className}` : "";

  return (
    <div
      className={`container xl:max-w-[${width}px] mx-auto ${classNameValue}`}
    >
      {children}
    </div>
  );
};

export default Container;
