import Image from "next/image";
import logoImage from "../../public/Logo.svg";

const Logo = ({
  children,
  width,
}: {
  children?: React.ReactNode;
  width?: number;
}) => {
  return (
    <div className="mr-2">
      <a href="/">
        <Image src={logoImage} alt="Logo" />
      </a>
    </div>
  );
};

export default Logo;
