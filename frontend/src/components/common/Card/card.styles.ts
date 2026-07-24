export const cardStyles = {
  base: `
    rounded-2xl
    border
    border-slate-800
    bg-slate-900/70
    shadow-lg
    transition-all
    duration-300
  `,

  hover: `
    hover:border-blue-500/40
    hover:shadow-blue-500/10
    hover:-translate-y-1
  `,

  blur: `
    backdrop-blur-xl
  `,
};

export const cardPadding = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};