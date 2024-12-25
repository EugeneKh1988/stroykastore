import { IDocument } from "@/app/docs/page";
import Button from "./Button";

const DocumentItem = ({
  doc,
  className,
}: {
  doc: IDocument;
  className?: string;
}) => {
  const classNameValue = className ? className : '';
  return (
    <div className={`flex flex-col ${classNameValue}`}>
      <div className="bg-shark w-[376px] h-[208px] pl-[50px] pt-[37px] ">
        <div className="w-[260px] h-[171px] bg-white p-5 text-center">
          <p className="text-shark text-[20px] leading-7">{doc.name}</p>
        </div>
      </div>
      <div className="w-[376px] p-4 border border-mercury">
        <p className="text-shark text-[18px] leading-6 font-bold">{doc.name}</p>
        <p className="text-shark text-[16px] leading-6 font-medium mt-1 uppercase">{`${doc.type} ${doc.size} ${doc.sizeUnit}`}</p>
        <Button
          text="Скачать"
          className="bg-gorse text-vulcan text-[18px] font-medium rounded-none px-[24px] hover:bg-shark hover:border-shark hover:text-white active:text-iron w-full mt-7"
        />
      </div>
    </div>
  );
};

export default DocumentItem;
