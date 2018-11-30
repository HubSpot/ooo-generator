import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { blueish, whiteish } from './tokens';

export const ChoiceStyles = props => {
  return (
    <MuiThemeProvider
      {...props}
      theme={createMuiTheme({
        palette: {
          primary: {
            main: blueish,
            dark: blueish,
            contrastText: whiteish,
          },
        },
        typography: {
          useNextVariants: true,
          fontSize: 18,
          button: {
            textTransform: 'none',
          },
        },
      })}
    />
  );
};

export const FormStyles = props => {
  return (
    <MuiThemeProvider
      {...props}
      theme={createMuiTheme({
        palette: {
          primary: {
            main: blueish,
            dark: blueish,
          },
        },
        typography: {
          useNextVariants: true,
        },
      })}
    />
  );
};
