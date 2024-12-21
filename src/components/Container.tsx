
const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const classNameValue = className ? `${className}` : "";

  return (
    <div className={`container xl:max-w-[1164px] mx-auto ${classNameValue}`}>
      {children}
    </div>
  );
};

export default Container;
