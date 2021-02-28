import {
  InputHTMLAttributes,
  FormEventHandler,
  FocusEventHandler,
} from 'react';

export default interface InputButtonFromProps extends InputHTMLAttributes {
  name: string;
  onSubmit: () => void;
  onFocus?: FocusEventHandler;
  onBlur?: FocusEventHandler;
}

export interface StyledProps {
  isFocus: boolean;
  isFilled: boolean;
}
