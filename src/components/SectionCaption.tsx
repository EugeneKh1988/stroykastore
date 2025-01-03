import Button from "./Button";

const SectionCaption = ({
  title,
  actionCaption = "",
  noAction,
}: {
  title: string;
  actionCaption?: string;
  noAction?: boolean;
}) => {
  return (
    <div className="flex justify-between">
      <h2 className="text-shark text-[34px] font-semibold leading-[44.2px]">
        {title}
      </h2>
      {noAction ? null : (
        <Button
          text={actionCaption}
          icon="caret_right"
          className="bg-transparent rounded-none border-iron text-vulcan text-[18px] font-medium hover:bg-shark hover:text-white active:text-iron"
        />
      )}
    </div>
  );
};

export default SectionCaption;
