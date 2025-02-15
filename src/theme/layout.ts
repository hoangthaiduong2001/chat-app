import { ThemeOptions } from '@mui/private-theming';

declare module '@mui/material/styles' {
  interface SizeOptions {
    xs?: string;
    sm?: string;
    base?: string;
    lg?: string;
    xl?: string;
    '2xl'?: string;
    '3xl'?: string;
    '4xl'?: string;
    '5xl'?: string;
    '6xl'?: string;
  }
  interface TypographyVariants {
    header: React.CSSProperties;
    menuTitle: React.CSSProperties;
    listTitle: React.CSSProperties;
    contentTitle: React.CSSProperties;
    dialogTitle: React.CSSProperties;
    breadcrumbTag: React.CSSProperties;
    contestLabel: React.CSSProperties;
    chartLabel: React.CSSProperties;
    default: React.CSSProperties;
    base: React.CSSProperties;
    tabTag: React.CSSProperties;
    cardRightInfo: React.CSSProperties;
    helper: React.CSSProperties;
    link: React.CSSProperties;
    buttonNormal: React.CSSProperties;
    buttonLarge: React.CSSProperties;
    sidebarParent?: React.CSSProperties;
    contentSubTitle: React.CSSProperties;
    tabTitle: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    header?: React.CSSProperties;
    menuTitle?: React.CSSProperties;
    listTitle?: React.CSSProperties;
    contentTitle?: React.CSSProperties;
    dialogTitle?: React.CSSProperties;
    breadcrumbTag?: React.CSSProperties;
    chartLabel?: React.CSSProperties;
    base?: React.CSSProperties;
    tabTag?: React.CSSProperties;
    sectionTitle?: React.CSSProperties;
    cardRightInfo?: React.CSSProperties;
    helper?: React.CSSProperties;
    link?: React.CSSProperties;
    buttonNormal?: React.CSSProperties;
    buttonLarge?: React.CSSProperties;
    sidebarParent?: React.CSSProperties;
    contentSubTitle?: React.CSSProperties;
    tabTitle?: React.CSSProperties;
  }

  interface ThemeOptions {
    customShadow?: {
      '001': React.CSSProperties;
      '002': React.CSSProperties;
      '003': React.CSSProperties;
      '004': React.CSSProperties;
      '005': React.CSSProperties;
      '006': React.CSSProperties;
    };
    iconSize?: SizeOptions;
    height?: {
      normal: string;
      mainHeader: string;
    };
  }

  interface DefaultTheme extends Theme {
    iconSize: SizeOptions;
    height: {
      normal: string;
      mainHeader: string;
    };
  }

  interface Theme {
    height: {
      normal: string;
      mainHeader: string;
    };
    iconSize: SizeOptions;
    customShadow: {
      '001': React.CSSProperties;
      '002': React.CSSProperties;
      '003': React.CSSProperties;
      '004': React.CSSProperties;
      '005': React.CSSProperties;
      '006': React.CSSProperties;
    };
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    header: true;
    menuTitle: true;
    listTitle: true;
    contentTitle: true;
    dialogTitle: true;
    breadcrumbTag: true;
    contestLabel: true;
    chartLabel: true;
    base: true;
    tabTag: true;
    sectionTitle: true;
    cardRightInfo: true;
    helper: true;
    link: true;
    sidebarParent: true;
    deleteText: true;
    contentSubTitle: true;
    tabTitle: true;
  }
}

export const themeOptions: ThemeOptions = {
  spacing: [0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 72],
  typography: {
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    // fontSize: 13,
    allVariants: {
      fontFamily: '"NotoSansCJKKR", sans-serif',
      textTransform: 'none',
      fontSize: 13,
    },
    button: {
      textTransform: 'none',
    },
  },
  iconSize: {
    xs: '8px',
    sm: '16px',
    base: '18px',
    lg: '20px',
    xl: '24px',
    '2xl': '32px',
  },
  customShadow: {
    '001': { boxShadow: '0 1px 4px rgb(0, 0, 0, 0.3)' },
    '002': { boxShadow: '0 2px 6px rgb(0, 0, 0, 0.3)' },
    '003': { boxShadow: '0 2px 8px rgb(0, 0, 0, 0.3)' },
    '004': { boxShadow: '0 2px 12px rgb(0, 0, 0, 0.3)' },
    '005': { boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.2)' },
    '006': { boxShadow: '1px 0px 4px 0px rgba(0, 0, 0, 0.2)' },
  },
  height: {
    normal: '28px',
    mainHeader: '54px',
  },
};

const layoutTheme = {
  ...themeOptions,
  typography: {
    ...themeOptions.typography,
    header: {
      fontSize: '18px',
      fontWeight: themeOptions.typography.fontWeightBold,
      lineHeight: '24px',
      letterSpacing: '-0.004em',
    },
    menuTitle: {
      fontSize: '11px',
      fontWeight: themeOptions.typography.fontWeightMedium,
      lineHeight: '16px',
      letterSpacing: '-0.002em',
    },
    listTitle: {
      fontSize: '13px',
      fontWeight: themeOptions.typography.fontWeightMedium,
      lineHeight: '20px',
      letterSpacing: '-0.002em',
    },
    contentTitle: {
      fontSize: '15px',
      fontWeight: themeOptions.typography.fontWeightMedium,
      lineHeight: '24px',
      letterSpacing: '-0.004em',
    },
    dialogTitle: {
      fontSize: '16px',
      fontWeight: themeOptions.typography.fontWeightMedium,
      lineHeight: '24px',
      letterSpacing: '-0.004em',
    },
    breadcrumbTag: {
      fontSize: '11px',
      fontWeight: themeOptions.typography.fontWeightMedium,
      lineHeight: '14px',
      letterSpacing: '-0.002em',
    },
    contestLabel: {
      fontSize: '13px',
      fontWeight: themeOptions.typography.fontWeightMedium,
      lineHeight: '20px',
      letterSpacing: '-0.002em',
    },
    chartLabel: {
      fontSize: '12px',
      fontWeight: themeOptions.typography.fontWeightRegular,
      lineHeight: '14px',
      letterSpacing: '-0.002em',
    },
    base: {
      fontSize: '13px',
      fontWeight: themeOptions.typography.fontWeightRegular,
      lineHeight: '20px',
      letterSpacing: '-0.002em',
    },
    tabTag: {
      fontSize: '13px',
      fontWeight: themeOptions.typography.fontWeightMedium,
      lineHeight: '20px',
      letterSpacing: '-0.01em',
    },
    sectionTitle: {
      fontSize: '15px',
      fontWeight: themeOptions.typography.fontWeightMedium,
      lineHeight: '24px',
      letterSpacing: '-0.002em',
    },
    cardRightInfo: {
      fontSize: '14px',
      fontWeight: themeOptions.typography.fontWeightRegular,
      lineHeight: '20px',
      letterSpacing: '-0.002em',
    },
    deleteText: {
      fontSize: '14px',
      fontWeight: themeOptions.typography.fontWeightMedium,
      lineHeight: '20px',
      letterSpacing: '-0.002em',
    },
    helper: {
      fontSize: '12px',
      fontWeight: themeOptions.typography.fontWeightRegular,
      lineHeight: '16px',
      letterSpacing: '-0.002em',
    },
    link: {
      fontSize: '13px',
      fontWeight: themeOptions.typography.fontWeightRegular,
      lineHeight: '20px',
      letterSpacing: '-0.002em',
    },
    buttonNormal: {
      fontSize: '13px',
      fontWeight: themeOptions.typography.fontWeightRegular,
      lineHeight: '20px',
      letterSpacing: '-0.01em',
    },
    buttonLarge: {
      fontSize: '16px',
      fontWeight: themeOptions.typography.fontWeightMedium,
      lineHeight: '24px',
      letterSpacing: '-0.01em',
    },
    sidebarParent: {
      fontSize: '15px',
      fontWeight: themeOptions.typography.fontWeightMedium,
      lineHeight: '24px',
    },
    h6: {
      fontSize: '15px',
      fontWeight: themeOptions.typography.fontWeightBold,
      lineHeight: '24px',
      letterSpacing: '-0.003em',
    },
    contentSubTitle: {
      fontSize: '15px',
      fontWeight: themeOptions.typography.fontWeightMedium,
      lineHeight: '20px',
      letterSpacing: '-0.004em',
    },
    tabTitle: {
      fontSize: '17px',
      fontWeight: themeOptions.typography.fontWeightBold,
      lineHeight: '25px',
      letterSpacing: '-0.01em',
    },
  },
};

export default layoutTheme;
