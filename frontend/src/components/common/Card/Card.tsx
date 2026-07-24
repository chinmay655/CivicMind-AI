import { CardProps } from "./card.types";
import { cardPadding, cardStyles } from "./card.styles";

const Card = ({
  children,
  hover = false,
  blur = true,
  padding = "md",
  className = "",
  ...props
}: CardProps) => {
  return (
    <div
      className={`
        ${cardStyles.base}
        ${blur ? cardStyles.blur : ""}
        ${hover ? cardStyles.hover : ""}
        ${cardPadding[padding]}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;