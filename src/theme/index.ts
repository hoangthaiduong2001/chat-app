import { createTheme } from '@mui/material/styles';
import componentsTheme from './components';

import { NotoSansCJKKR } from './font';
import layoutTheme from './layout';

const theme = createTheme({
  components: {
    ...componentsTheme,
    MuiCssBaseline: {
      styleOverrides: NotoSansCJKKR,
    },
  },
  ...layoutTheme,
});

export default theme;
