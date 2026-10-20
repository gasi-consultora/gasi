const paths = {
  wave: "M0,40 C160,85 320,0 520,30 C700,56 820,92 1000,58 C1160,28 1280,70 1440,36 L1440,110 L0,110 Z",
  arc: "M0,70 C360,10 1080,10 1440,70 L1440,110 L0,110 Z",
  ripple:
    "M0,55 C120,20 240,90 360,55 C480,20 600,90 720,55 C840,20 960,90 1080,55 C1200,20 1320,90 1440,55 L1440,110 L0,110 Z",
};

type OrganicDividerProps = {
  /** Tailwind text-color class matching the background of the section that follows */
  color: string;
  flip?: boolean;
  variant?: keyof typeof paths;
};

export function OrganicDivider({ color, flip = false, variant = "wave" }: OrganicDividerProps) {
  return (
    <div aria-hidden className={`${color} block leading-[0]`}>
      <svg
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        className={`h-10 w-full sm:h-16 ${flip ? "rotate-180" : ""}`}
      >
        <path d={paths[variant]} fill="currentColor" />
      </svg>
    </div>
  );
}
