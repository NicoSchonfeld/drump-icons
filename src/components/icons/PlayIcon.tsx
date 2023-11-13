import { Props } from "@/types/type";

const PlayIcon: React.FC<Props> = ({
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
          <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
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
          <polygon points="5 3 19 12 5 21 5 3" fill="var(--geist-fill)" />
        </svg>
      )}
    </>
  );
};

export default PlayIcon;
