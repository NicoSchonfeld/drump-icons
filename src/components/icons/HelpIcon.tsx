import { Props } from "@/types/type";

const HelpIcon: React.FC<Props> = ({
  solid = true,
  w = "24",
  h = "24",
  ...props
}) => {
  return (
    <>
      {solid ? (
        <svg
          width={w}
          height={h}
          fill="none"
          shapeRendering="geometricPrecision"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          {...props}
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
          <path d="M12 17h.01" />
        </svg>
      ) : (
        <svg
          width={w}
          height={h}
          fill="none"
          shapeRendering="geometricPrecision"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          {...props}
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
          <path d="M12 17h.01" />
        </svg>
      )}
    </>
  );
};

export default HelpIcon;
