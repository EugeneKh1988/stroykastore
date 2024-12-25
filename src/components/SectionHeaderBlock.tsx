import BreadCrumbs from "./BreadCrumbs";
import Container from "./Container";

const SectionHeaderBlock = ({title, description, className, links}: {title: string, description?: string, className?: string, links:{name: string, url?: string}[]}) => {
    const classNameValue = className ? { className } : {};
  return (
    <div {...classNameValue}>
      <Container>
        <div className="pt-[40px] pb-[60px] pl-2 md:pl-0">
          <BreadCrumbs
            links={links}
          />
          <h1 className="mt-5 text-vulcan text-[48px] font-bold leading-[57.6px]">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 text-shark font-normal text-[20px] leading-[30px] max-w-[520px]">
              {description}
            </p>
          ) : null}
        </div>
      </Container>
    </div>
  );
};

export default SectionHeaderBlock;
