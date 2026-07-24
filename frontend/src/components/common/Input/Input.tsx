import { InputProps } from "./input.types";
import { inputStyles } from "./input.styles";

const Input = ({
  label,
  error,
  helperText,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  fullWidth = true,
  className = "",
  ...props
}: InputProps) => {
  return (
    <div className={fullWidth ? "w-full" : ""}>
      {label && (
        <label className={inputStyles.label}>
          {label}
        </label>
      )}

      <div className="relative">
        {LeftIcon && (
          <LeftIcon
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
          />
        )}

        <input
          className={`
            ${inputStyles.base}
            ${LeftIcon ? "pl-10" : ""}
            ${RightIcon ? "pr-10" : ""}
            ${className}
          `}
          {...props}
        />

        {RightIcon && (
          <RightIcon
            size={18}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
          />
        )}
      </div>

      {error ? (
        <p className={inputStyles.error}>
          {error}
        </p>
      ) : helperText ? (
        <p className={inputStyles.helper}>
          {helperText}
        </p>
      ) : null}
    </div>
  );
};

export default Input;