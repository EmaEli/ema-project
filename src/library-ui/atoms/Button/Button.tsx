import { FC, ButtonHTMLAttributes } from 'react';
import { ButtonVariant, ButtonSize, StyledButton } from 'src/library-ui/atoms/Button/Button.styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

/**
 * Button Component
 */
const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  ...rest
}) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
