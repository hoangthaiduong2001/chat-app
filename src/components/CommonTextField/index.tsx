import {
  Box,
  FormHelperText,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { MdClear } from 'react-icons/md';
import { CTextFieldProps } from './type';

export const CommonTextField = ({
  errorMessage,
  label,
  variant = 'outlined',
  defaultValue,
  isDisabled = false,
  placeholder,
  inputType = 'text',
  width = '100%',
  startAdornmentChildren,
  endAdornmentChildren,
  maxLength,
  value,
  onChange,
  clearable,
  onKeyDown,
  sx,
  readOnly = false,
}: CTextFieldProps) => {
  return (
    <Box width={width}>
      <TextField
        onKeyDown={onKeyDown}
        label={label}
        fullWidth
        value={value}
        placeholder={placeholder}
        defaultValue={defaultValue}
        autoSave="false"
        autoComplete={inputType === 'password' ? 'off' : 'on'}
        type={inputType}
        variant={variant}
        disabled={isDisabled}
        error={!!errorMessage}
        inputProps={{
          maxLength: maxLength,
          sx: {
            height: 30,
          },
        }}
        onChange={(e) => onChange?.(e.target.value)}
        InputProps={{
          sx: sx,
          readOnly: readOnly,
          startAdornment: startAdornmentChildren ? (
            <InputAdornment position="start" sx={{ color: 'inherit' }}>
              <>{startAdornmentChildren}</>
            </InputAdornment>
          ) : undefined,
          endAdornment:
            endAdornmentChildren || clearable ? (
              <InputAdornment position="end" sx={{ color: 'inherit' }}>
                <>
                  {clearable && !!value && (
                    <Stack
                      sx={{
                        alignItems: 'center',
                        ':hover': { cursor: 'pointer' },
                      }}
                      onClick={() => {
                        onChange?.('');
                      }}
                    >
                      <MdClear size={15} />
                    </Stack>
                  )}
                  {endAdornmentChildren}
                </>
              </InputAdornment>
            ) : undefined,
        }}
      />

      {errorMessage && (
        <FormHelperText
          error={!!errorMessage}
          sx={{
            marginTop: 1,
          }}
        >
          <Typography className="text-red-500 text-2xl" variant={'inherit'}>
            {errorMessage}
          </Typography>
        </FormHelperText>
      )}
    </Box>
  );
};
