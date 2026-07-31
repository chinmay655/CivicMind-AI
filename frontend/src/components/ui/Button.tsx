interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
}

const Button = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        rounded-2xl
        bg-gradient-to-r
        from-blue-600
        to-cyan-500
        px-6
        py-3
        font-semibold
        text-white
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:shadow-xl
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;