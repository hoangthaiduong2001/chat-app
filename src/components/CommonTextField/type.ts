import { SxProps, TextFieldProps, Theme } from '@mui/material';

type TInputType = 'password' | 'text';
type TVariant = 'outlined' | 'standard';

type BaseTextFieldProps = Pick<TextFieldProps, 'onKeyDown' | 'InputProps'>;

export interface CTextFieldProps extends BaseTextFieldProps {
  errorMessage?: string;
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
  readOnly?: boolean;
  sx?: SxProps<Theme>;
}
