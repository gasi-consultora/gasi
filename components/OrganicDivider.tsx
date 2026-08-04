type OrganicDividerProps = {
  /** Tailwind text-color class matching the background of the section that follows */
  color: string;
  flip?: boolean;
};

export function OrganicDivider({ color, flip = false }: OrganicDividerProps) {
  return (
    <div aria-hidden className={`${color} block leading-[0]`}>
      <svg
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        className={`h-10 w-full sm:h-16 ${flip ? "rotate-180" : ""}`}
      >
        <path
          d="M0,40 C160,85 320,0 520,30 C700,56 820,92 1000,58 C1160,28 1280,70 1440,36 L1440,110 L0,110 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
