import { TextFieldProps } from '@mui/material';

type TInputType = 'password' | 'text';
type TVariant = 'outlined' | 'standard';

type BaseTextFieldProps = Pick<TextFieldProps, 'onKeyDown' | 'autoFocus'>;

export interface CTextFieldProps extends BaseTextFieldProps {
  errorMessage?: string;
  isError?: boolean;
  inputType?: TInputType;
  isDisabled?: boolean;
  width?: string;
  variant?: TVariant;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  startAdornmentChildren?: React.ReactNode;
  endAdornmentChildren?: React.ReactNode;
  maxLength?: number;
  value: string;
  clearable?: boolean;
  onChange?: (value: string) => void;
  descriptionText?: string;
  onBlur?: () => void;
  readOnly?: boolean;
}
