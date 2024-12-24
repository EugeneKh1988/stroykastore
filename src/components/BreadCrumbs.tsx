import Link from "next/link";

const BreadCrumbs = ({
  links,
  className,
}: {
  links: {name: string, url?: string}[],
  className?: string;
}) => {
  const classNameValue = className ? className : '';
  return (
    <div className={`breadcrumbs text-mako text-[16px] font-normal ${classNameValue}`}>
      <ul>
        {links.map((item, index) => (
            <li key={index}>
                {item.url ? <Link href={item.url}>{item.name}</Link> : item.name}
            </li>
        ))}
      </ul>
    </div>
  );
};

export default BreadCrumbs;
