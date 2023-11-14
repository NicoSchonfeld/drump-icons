import { Props } from "@/types/type";

const SearchIcon: React.FC<Props> = ({
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
          <path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z" />
          <path d="M16 16l4.5 4.5" />
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
          <path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z" />
          <path d="M16 16l4.5 4.5" />
        </svg>
      )}
    </>
  );
};

export default SearchIcon;
