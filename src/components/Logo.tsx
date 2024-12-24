import Image from "next/image";
import logoImage from "../../public/Logo.svg";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="mr-2">
      <Link href="/">
        <Image src={logoImage} alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
