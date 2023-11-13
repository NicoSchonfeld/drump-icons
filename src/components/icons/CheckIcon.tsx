import { Props } from "@/types/type";

const CheckIcon: React.FC<Props> = ({
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
          data-testid="geist-icon"
          fill="none"
          shape-rendering="geometricPrecision"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          {...props}
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      ) : (
        <svg
          width={w}
          height={h}
          data-testid="geist-icon"
          fill="none"
          shape-rendering="geometricPrecision"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          {...props}
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      )}
    </>
  );
};

export default CheckIcon;