import { Box, FormHelperText, InputAdornment, Stack, TextField, Typography } from '@mui/material';
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
  autoFocus,
  onBlur,
  isError,
  readOnly = false,
}: CTextFieldProps) => {
  return (
    <Box width={width}>
      <TextField
        autoFocus={autoFocus}
        onKeyDown={onKeyDown}
        label={label}
        fullWidth
        value={value}
        placeholder={placeholder}
        defaultValue={defaultValue}
        autoSave="false"
        onBlur={() => {
          onBlur?.();
        }}
        autoComplete={inputType === 'password' ? 'off' : 'on'}
        type={inputType}
        variant={variant}
        disabled={isDisabled}
        error={isError || !!errorMessage}
        inputProps={{
          maxLength: maxLength,
          sx: {
            height: 20,
          },
        }}
        onChange={(e) => onChange?.(e.target.value)}
        InputProps={{
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
                        width: 'fit-content',
                      }}
                      onClick={() => {
                        onChange?.('');
                      }}
                    >
                      <MdClear />
                    </Stack>
                  )}
                  {endAdornmentChildren}
                </>
              </InputAdornment>
            ) : undefined,
        }}
      />

      {isError && (
        <FormHelperText
          error={isError}
          sx={{
            marginTop: 1,
          }}
        >
          <Typography className="text-red-500" variant={'inherit'}>
            {errorMessage}
          </Typography>
        </FormHelperText>
      )}
    </Box>
  );
};
