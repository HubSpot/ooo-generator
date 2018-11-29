import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { pinkish, whiteish } from './tokens';

export const ChoiceStyles = props => {
  return (
    <MuiThemeProvider
      {...props}
      theme={createMuiTheme({
        palette: {
          primary: {
            main: pinkish,
            dark: pinkish,
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
            main: pinkish,
            dark: pinkish,
          },
        },
        typography: {
          useNextVariants: true,
        },
      })}
    />
  );
};
