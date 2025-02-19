import { alpha, Color } from '@mui/material';
import { PaletteOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface NeutralLightColor extends Color {
    0: string;
    25: string;
    150: string;
  }
  interface Palette {
    neutralLight: NeutralLightColor;
    neutralDark: Palette['grey'];
    purple: Palette['grey'];
    blue: Palette['grey'];
    green: Palette['grey'];
    red: Palette['grey'];
    orange: Palette['grey'];
    yellow: Palette['grey'];
    icon: Palette['text'];
    button: TypeButton;
    primaryButton?: Palette['primary'];
    border: Partial<TypeBorder>;
    layer?: Partial<TypeLayer>;
    field?: TypeField;
  }

  interface PaletteOptions {
    neutralLight: Partial<NeutralLightColor>;
    neutralDark: Partial<NeutralLightColor>;
    purple: Partial<NeutralLightColor>;
    blue: Partial<NeutralLightColor>;
    green: Partial<NeutralLightColor>;
    red: Partial<NeutralLightColor>;
    orange: Partial<NeutralLightColor>;
    yellow: Partial<NeutralLightColor>;
    icon?: PaletteOptions['text'];
    button?: Partial<TypeButton>;
    primaryButton?: PaletteOptions['primary'];
    border?: Partial<TypeBorder>;
    white: string;
  }

  interface TypeText {
    placeholder?: TypeText['primary'];
    brandPrimary?: TypeText['primary'];
    brandSecondary?: TypeText['primary'];
    error?: TypeText['primary'];
    link?: TypeText['primary'];
    inverse?: TypeText['primary'];
  }

  interface TypeBackground {
    '01'?: TypeBackground['default'];
    '02'?: TypeBackground['default'];
    '03'?: TypeBackground['default'];
  }

  interface TypeLayer {
    '01': string;
    hover01: string;
    active01: string;
    selected01: string;
    '02': string;
    hover02: string;
    active02: string;
    selected02: string;
    '03': string;
    hover03: string;
    active03: string;
    selected03: string;
    '04': string;
    hover04: string;
    selected04: string;
    accentSelected01: string;
    accentSelected02: string;
    accentHover03: string;
    accentActive03: string;
  }

  interface TypeField {
    primary: string;
    hover: string;
  }
  interface TypeButton {
    primary: string;
    primaryHover: string;
    primaryActive: string;
    primaryDisabled: string;
    secondary: string;
    secondaryHover01: string;
    secondaryActive01: string;
    secondary01: string;
    secondaryHover02: string;
    secondaryActive02: string;
    danger: string;
    dangerHover: string;
    dangerActive: string;
  }
  interface TypeBorder {
    '01': string;
    '02': string;
    '03': string;
    '04': string;
    '05': string;
    brandPrimary: string;
    brandSecondary: string;
    disabled: string;
    divider: string;
  }
}

const paletteOptions: PaletteOptions = {
  neutralDark: {
    '500': '#9A9BA0',
    '700': '#323A48',
    '800': '#2A2D37',
  },
  neutralLight: {
    '0': '#FFFFFF',
    '25': alpha('#F5F6F7', 0.5),
    '50': '#F5F6F7',
    '100': '#ECEEF0',
    '150': '#DEDFE2',
    '200': '#D3D5DA',
    '300': '#B9BDC3',
    '400': '#9EA4AC',
    '500': '#7A828E',
    '600': '#5E6777',
    '700': '#434D5F',
    '800': '#1C293E',
    '900': '#0F1722',
  },
  purple: {
    '50': '#F1ECFF',
    '100': '#DACEFF',
    '200': '#BEA9FD',
    '300': '#A182FC',
    '400': '#8E69FC',
    '500': '#7244FB',
    '600': '#6137DF',
    '700': '#5130B2',
    '800': '#3F258A',
    '900': '#301D69',
  },
  blue: {
    '50': '#E8F5FE',
    '100': '#C9E8FF',
    '200': '#95D0FA',
    '300': '#64BAF8',
    '400': '#46ADF7',
    '500': '#1898F5',
    '600': '#0485E3',
    '700': '#116CAE',
    '800': '#0D5487',
    '900': '#0A4067',
  },
  green: {
    '50': '#EAF9F3',
    '100': '#BFEBDB',
    '200': '#A0E1CA',
    '300': '#74D3B1',
    '400': '#59CBA2',
    '500': '#30BE8B',
    '600': '#2CAD7E',
    '700': '#228763',
    '800': '#1A694C',
    '900': '#14503A',
  },
  red: {
    '50': '#FDECEB',
    '100': '#FAC5C0',
    '200': '#F8A9A1',
    '300': '#F48276',
    '400': '#F2695C',
    '500': '#EF4433',
    '600': '#D93E2E',
    '700': '#B82719',
    '800': '#952015',
    '900': '#761E14',
  },
  orange: {
    '50': '#FFF4E7',
    '100': '#FFDCB5',
    '200': '#FFCB91',
    '300': '#FFB35E',
    '400': '#FFA23B',
    '500': '#FF8B0A',
    '600': '#E8800E',
    '700': '#B5640B',
    '800': '#8C4E08',
    '900': '#6B3B06',
  },
  yellow: {
    '50': '#FFF8EB',
    '100': '#FEEAC2',
    '200': '#FEE0A5',
    '300': '#FFD584',
    '400': '#FFC85A',
    '500': '#FEB72C',
    '600': '#EAA317',
    '700': '#BD861A',
    '800': '#8B6720',
    '900': '#6A4F19',
  },
  secondary: {
    main: '#0485E3',
    dark: '#0485E3',
  },
  primary: {
    main: '#7244FB',
    '50': '#F1ECFF',
    '100': '#DACEFF',
    '200': '#BEA9FD',
    '300': '#A182FC',
    '400': '#8E69FC',
    '500': '#7244FB',
    '600': '#6137DF',
    '700': '#5130B2',
    '800': '#3F258A',
    '900': '#301D69',
  },
  white: '#fff',
};
const paletteTheme = {
  ...paletteOptions,
  text: {
    primary: paletteOptions.neutralLight[800],
    secondary: paletteOptions.neutralLight[500],
    placeholder: paletteOptions.neutralLight[400],
    disabled: paletteOptions.neutralLight[300],
    brandPrimary: paletteOptions.purple[500],
    brandSecondary: paletteOptions.purple[600],
    inverse: paletteOptions.white,
    error: paletteOptions.red[600],
    link: paletteOptions.blue[500],
  },
  icon: {
    primary: paletteOptions.neutralLight[700],
    secondary: paletteOptions.neutralLight[400],
    disabled: paletteOptions.neutralLight[200],
    brandPrimary: paletteOptions.purple[500],
    brandSecondary: paletteOptions.blue[500],
    inverse: paletteOptions.white,
    error: paletteOptions.red[500],
  },
  button: {
    primary: paletteOptions.purple[500],
    primaryHover: paletteOptions.purple[600],
    primaryActive: paletteOptions.purple[700],
    primaryDisabled: paletteOptions.neutralLight[50],
    secondary: paletteOptions.white,
    secondaryHover01: paletteOptions.neutralLight[100],
    secondaryActive01: paletteOptions.neutralLight[150],
    secondary01: paletteOptions.neutralLight[100],
    secondaryHover02: paletteOptions.neutralLight[150],
    secondaryActive02: paletteOptions.neutralLight[200],
    danger: paletteOptions.red[500],
    dangerHover: paletteOptions.red[600],
    dangerActive: paletteOptions.red[700],
  },
  field: {
    primary: paletteOptions.white,
    hover: paletteOptions.neutralLight[50],
  },
  status: {
    fail: paletteOptions.orange[500],
    success: paletteOptions.green[500],
    severe: paletteOptions.red[500],
    critical: paletteOptions.orange[500],
    warning: paletteOptions.yellow[500],
    info: paletteOptions.blue[500],
    normal: paletteOptions.green[500],
    error: paletteOptions.red[500],
    stop: paletteOptions.neutralDark[500],
    running: paletteOptions.green[500],
  },
  border: {
    '01': '#DFE2E6',
    '02': paletteOptions.neutralLight[200],
    '03': paletteOptions.neutralLight[700],
    '04': paletteOptions.neutralDark[500],
    '05': paletteOptions.neutralLight[150],
    brandPrimary: paletteOptions.purple[500],
    brandSecondary: paletteOptions.blue[500],
    disabled: paletteOptions.neutralLight[100],
    divider: '#EEF0F5',
  },
  background: {
    '01': paletteOptions.neutralLight[0],
    '02': paletteOptions.neutralLight[25],
    '03': paletteOptions.neutralLight[50],
  },
  layer: {
    '01': paletteOptions.neutralLight[0],
    hover01: paletteOptions.neutralLight[50],
    active01: paletteOptions.neutralLight[150],
    selected01: paletteOptions.neutralLight[100],
    '02': paletteOptions.neutralLight[50],
    hover02: paletteOptions.neutralLight[100],
    active02: paletteOptions.neutralLight[200],
    selected02: paletteOptions.neutralLight[150],
    '03': paletteOptions.neutralLight[100],
    hover03: paletteOptions.neutralLight[150],
    active03: paletteOptions.neutralLight[200],
    selected03: paletteOptions.neutralLight[150],
    '04': paletteOptions.neutralLight[150],
    hover04: paletteOptions.neutralLight[200],
    selected04: paletteOptions.neutralLight[100],
    accentSelected01: paletteOptions.blue[50],
    accentSelected02: paletteOptions.blue[100],
    accentHover03: paletteOptions.purple[50],
    accentActive03: paletteOptions.purple[100],
  },
};

export default paletteTheme;
