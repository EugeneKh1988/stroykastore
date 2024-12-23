


const SvgIcon = ({
  iconName,
  className,
}: {
  iconName: string;
  className?: string;
}) => {
  const classNameValue = className ? { className } : {};
  // icons
  const icons: Record<string, React.ReactElement> = {
    bar: (
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="currentColor"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...classNameValue}
      >
        <path
          d="M4.5 18L14.5 18"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.5 12L20.5 12"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.5 6L10.5 6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    prev_arrow: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...classNameValue}
      >
        <path
          d="M19 12H5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 5L5 12L12 19"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    next_arrow: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...classNameValue}
      >
        <path
          d="M5 12H19"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 5L19 12L12 19"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    caret_right: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...classNameValue}
      >
        <path
          d="M9 18L15 12L9 6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    plus: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 5V19"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 12H19"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    minus: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 12H19"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };

  const Icon = icons[iconName];
  return <>{Icon}</>;
};

export default SvgIcon;
