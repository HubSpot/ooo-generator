import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { black, white } from './tokens';

export const ChoiceStyles = props => {
  return (
    <MuiThemeProvider
      {...props}
      theme={createMuiTheme({
        palette: {
          primary: {
            main: black,
            dark: black,
            contrastText: white,
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
            main: black,
            dark: black,
          },
        },
        typography: {
          useNextVariants: true,
        },
      })}
    />
  );
};
