import { ComponentsOverrides, Theme } from '@mui/material';

import {
  fontBoldOtf,
  fontBoldWoff,
  fontLightOtf,
  fontLightWoff,
  fontMediumOtf,
  fontMediumWoff,
  fontRegularOtf,
  fontRegularWoff,
} from '../assets/font';

export const NotoSansCJKKR: ComponentsOverrides<Theme>['MuiCssBaseline'] = `
@font-face {
  font-family: 'NotoSansCJKKR';
  font-style: normal;
  font-weight: 300;
  src: url(${fontLightWoff}) format('woff'),
    url(${fontLightOtf}) format('opentype');
}
@font-face {
  font-family: 'NotoSansCJKKR';
  font-style: normal;
  font-weight: 400;
  src: url(${fontRegularWoff}) format('woff'),
    url(${fontRegularOtf}) format('opentype');
}
@font-face {
  font-family: 'NotoSansCJKKR';
  font-style: normal;
  font-weight: 500;
  src: url(${fontMediumWoff}) format('woff'),
    url(${fontMediumOtf}) format('opentype');
}
@font-face {
  font-family: 'NotoSansCJKKR';
  font-style: normal;
  font-weight: 700;
  src: url(${fontBoldWoff}) format('woff'),
    url(${fontBoldOtf}) format('opentype');
}
`;
