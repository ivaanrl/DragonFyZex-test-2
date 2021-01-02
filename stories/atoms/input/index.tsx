import React from 'react';
import { StyledInput } from './styles';

export interface StyledInputProps {
  inputSize?: 'small' | 'medium' | 'large';
  color?: 'dark' | 'light';
}

export interface InputProps extends StyledInputProps {
  placeholder?: string;
  value?: string;
  onChange?: () => void;
}

export const Input: React.FC<
  InputProps &
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
> = (
  { inputSize = 'medium', color = 'light', placeholder, value, onChange },
  ...rest
) => {
  return (
    <StyledInput
      inputSize={inputSize}
      color={color}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};
