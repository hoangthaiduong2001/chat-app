import { Components } from '@mui/material';

import layoutTheme from './layout';
import paletteTheme from './palette';

const componentsTheme: Components = {
  MuiTypography: {
    defaultProps: {
      variantMapping: {
        body1: 'span',
        body2: 'span',
        inherit: 'span',
      },
    },
    styleOverrides: {
      h1: {
        fontSize: '40px',
        fontWeight: 'bold',
      },
    },
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        padding: 0,
        borderRadius: '2px',
        height: '18px',
        width: '18px',
        color: paletteTheme.icon.secondary,
        '&:hover': {
          backgroundColor: paletteTheme.layer?.hover03,
        },
        '.MuiSvgIcon-root': {
          height: '18px',
          width: '18px',
        },
        '&.Mui-checked, &.MuiCheckbox-indeterminate': {
          color: paletteTheme.icon.brandSecondary,
        },
        '&.Mui-disabled': {
          color: paletteTheme.icon.disabled,
        },
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        padding: '4px 8px',
        borderRadius: '4px',
        backgroundColor: paletteTheme.neutralDark['800'],
        color: paletteTheme.neutralLight[0],
        ...layoutTheme.customShadow?.['002'],
      },
    },
  },
  MuiOutlinedInput: {
    defaultProps: {
      size: 'small',
    },
    styleOverrides: {
      root: {
        ...layoutTheme.typography.base,
        minHeight: '28px',
        padding: '4px 8px',
        borderColor: paletteTheme.border?.['02'],
        backgroundColor: 'white',
        '&:hover:not(.Mui-disabled)': {
          backgroundColor: paletteTheme.field?.hover,
          '&:not(.Mui-focused) fieldset': {
            border: `1px solid ${paletteTheme.border?.['04']}`,
          },
        },
        '&.Mui-focused:not(.Mui-readOnly)': {
          fieldset: {
            border: `2px solid ${paletteTheme.border?.brandPrimary}`,
          },
          backgroundColor: 'white',
        },
        '&.Mui-disabled:not(.Mui-readOnly)': {
          borderColor: paletteTheme.border?.disabled,
          '&:has(.MuiSelect-select)': {
            borderColor: paletteTheme.border?.['02'],
            backgroundColor: paletteTheme.background?.['03'],
          },
        },
        '&.Mui-readOnly:not(.Mui-disabled)': {
          borderColor: paletteTheme.border?.['02'],
          backgroundColor: paletteTheme.background?.['03'],
          '&.Mui-focused fieldset ': {
            borderColor: paletteTheme.border?.['04'],
          },
        },

        '& .MuiOutlinedInput-input': {
          padding: 0,
        },
        '&.Mui-error': {
          '& fieldset': {
            borderColor: `${paletteTheme.status.error} !important`,
          },
        },
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        ...layoutTheme.typography.base,
        '&:hover ': {
          backgroundColor: paletteTheme.layer?.hover01,
        },
        '&.Mui-selected': {
          backgroundColor: `${paletteTheme.layer?.active01} !important`,
          '&:hover': {
            backgroundColor: paletteTheme.layer?.hover01,
          },
        },
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      input: {
        ...layoutTheme.typography.base,
      },
    },
  },
  MuiButton: {
    defaultProps: {
      size: 'small',
      variant: 'contained',
      color: 'primary',
    },
    variants: [
      {
        props: { color: 'error', variant: 'contained' },
        style: {
          backgroundColor: paletteTheme.button.danger,
          '&:hover': {
            backgroundColor: paletteTheme.button.dangerHover,
          },
          '&.Mui-focusVisible': {
            backgroundColor: paletteTheme.button.dangerActive,
          },
          '&.Mui-disabled': {
            backgroundColor: paletteTheme.button.primaryDisabled,
            color: paletteTheme.neutralLight[300],
            '& .MuiButton-startIcon > svg path': {
              fill: paletteTheme.neutralLight[200],
            },
          },
        },
      },
      {
        props: { color: 'secondary', variant: 'text' },
        style: {
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: paletteTheme.button.secondaryHover01,
          },
          '&.Mui-focusVisible': {
            backgroundColor: paletteTheme.button.secondaryActive01,
          },
          '&.Mui-disabled': {
            color: paletteTheme.text.disabled,
          },
        },
      },
      {
        props: { color: 'secondary', variant: 'outlined' },
        style: {
          backgroundColor: 'white',
          borderColor: paletteTheme.border?.['02'],
          '&:hover': {
            backgroundColor: paletteTheme.button.secondaryHover01,
            borderColor: paletteTheme.border?.['02'],
          },
          '&.Mui-focusVisible': {
            backgroundColor: paletteTheme.button.secondaryActive01,
          },
          '&.Mui-disabled': {
            color: paletteTheme.text.disabled,
          },
        },
      },
      {
        props: { color: 'secondary', variant: 'contained' },
        style: {
          backgroundColor: paletteTheme.button.secondary01,
          '&:hover': {
            backgroundColor: paletteTheme.button.secondaryHover02,
          },
          '&.Mui-focusVisible': {
            backgroundColor: paletteTheme.button.secondaryActive02,
          },
          '&.Mui-disabled': {
            color: paletteTheme.text.disabled,
            backgroundColor: paletteTheme.neutralLight[50],
          },
        },
      },
      {
        props: { color: 'secondary' },
        style: {
          color: paletteTheme.text.primary,
        },
      },
      {
        props: { color: 'primary', variant: 'contained' },
        style: {
          backgroundColor: paletteTheme.button.primary,
          color: paletteTheme.text.inverse,
          '&:hover': {
            backgroundColor: paletteTheme.button.primaryHover,
          },
          '&.Mui-disabled': {
            backgroundColor: paletteTheme.button.primaryDisabled,
            color: paletteTheme.neutralLight[300],
            '& .MuiButton-startIcon > svg path': {
              fill: paletteTheme.neutralLight[200],
            },
          },
          '&.Mui-focusVisible': {
            backgroundColor: paletteTheme.button.primaryActive,
          },
        },
      },
      {
        props: { color: 'primary', variant: 'text' },
        style: {
          color: paletteTheme.button.primary,
          '&:hover': {
            backgroundColor: paletteTheme.button.secondaryHover01,
          },
          '&.Mui-disabled': {
            color: paletteTheme.text.disabled,
          },
        },
      },
      {
        props: { color: 'primary', variant: 'outlined' },
        style: {
          color: paletteTheme.button.primary,
          borderColor: paletteTheme.button.primary,
          '&:hover, &:active': {
            backgroundColor: paletteTheme.button.secondaryHover01,
          },
          '&.Mui-focusVisible': {
            backgroundColor: paletteTheme.button.secondaryActive01,
          },
          '&.Mui-disabled': {
            color: paletteTheme.text.disabled,
            borderColor: paletteTheme.border.disabled,
          },
        },
      },
    ],
    styleOverrides: {
      root: {
        gap: '4px',
        boxShadow: 'none',
        minWidth: 'unset',
        justifyContent: 'center',
        textTransform: 'inherit',
        '&:hover': { boxShadow: 'none' },
        '&.Mui-focusVisible': {
          boxShadow: 'none',
        },
        '&.MuiButton-sizeSmall, &.MuiButton-sizeMedium ': {
          ...layoutTheme.typography.buttonNormal,
          padding: '4px 8px',
          '&.pageSearchButton': {
            minWidth: 73,
          },
          '&.modalSearchButton': {
            minWidth: 65,
          },
        },
        '&.MuiButton-sizeLarge': {
          ...layoutTheme.typography.buttonLarge,
          padding: '6px 16px',
          height: 36,
        },
        '&.Mui-disabled': {
          cursor: 'not-allowed',
        },
      },
      startIcon: {
        margin: 0,
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
        '&.MuiButton-sizeSmall': {
          width: 18,
          height: 18,
          '& svg': {
            width: 15,
            height: 15,
          },
        },
        '&.MuiButton-sizeLarge': {
          width: 20,
          height: 20,
          '& svg': {
            width: 18,
            height: 18,
          },
        },
      },
    },
  },
  MuiIconButton: {
    defaultProps: { size: 'medium' },
    variants: [
      {
        props: { size: 'medium' },
        style: {
          root: {
            width: 24,
            height: 24,
          },
        },
      },
      {
        props: { size: 'small' },
        style: {
          root: {
            width: 18,
            height: 18,
          },
        },
      },
    ],
    styleOverrides: {
      root: {
        padding: 0,
        margin: 0,
      },
      sizeSmall: {
        width: 18,
        height: 18,
        '& > svg': { width: 18, height: 18 },
      },
      sizeMedium: {
        width: 24,
        height: 24,
      },
    },
  },
  MuiToolbar: {
    styleOverrides: {
      root: {
        minHeight: 'unset !important',
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        maxHeight: '80vh',
        margin: 0,
        ...layoutTheme.customShadow?.['005'],
        '& > div.MuiDialogContent-root': {
          padding: '16px 20px 20px',
        },
      },
      root: {
        zIndex: 1000,
        '& .MuiButton-root': {
          padding: '4px 16px !important',
          flexShrink: 0,
        },
      },
    },
    variants: [
      { props: { maxWidth: 'sm' }, style: { paper: { maxWidth: '100px !important' } } },
      { props: { maxWidth: 'md' }, style: { paper: { maxWidth: '800px' } } },
      { props: { maxWidth: 'lg' }, style: { paper: { maxWidth: '720px' } } },
      { props: { maxWidth: 'xl' }, style: { paper: { maxWidth: '1000px' } } },
    ],
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: '0 20px 20px',
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        padding: '20px 20px 0px',
      },
    },
  },
  MuiRadio: {
    defaultProps: {
      size: 'small',
    },
    styleOverrides: {
      root: {
        height: 28,
        width: 28,
        '& span svg': {
          height: 18,
          width: 18,
        },
        color: paletteTheme.icon.secondary,
        '&.Mui-checked': {
          color: paletteTheme.icon.brandSecondary,
        },
        '&.Mui-disabled': {
          color: paletteTheme.icon.disabled,
        },
      },
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      label: {
        ...layoutTheme.typography.base,
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: 'unset',
        color: 'inherit',
      },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        padding: '8px',
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        margin: '3px 0 0',
        fontSize: '11px',
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        ...layoutTheme.customShadow?.['005'],
      },
    },
  },
  MuiStack: {
    defaultProps: {
      direction: 'row',
    },
  },
};

export default componentsTheme;
