/* eslint-disable react/no-children-prop */
'use client'
import * as React from 'react';
import { Inter } from 'next/font/google'
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { createTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material'; // or '@mui/system' depending on your setup
import Fade from '@mui/material/Fade';
import { ThemeProvider } from '@emotion/react';
import { Analytics } from '@vercel/analytics/react';
import Header from '@c/header/index'
import Footer from '@c/footer/'

import './globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

interface Props {
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function ScrollTop(props: Props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        className=' tw-z-50'
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

const inter = Inter({ subsets: ['latin'] })

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function RootLayout(props: Props) {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = React.useState<any>(prefersDarkMode ? 'dark' : 'light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: string) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
          ? {
              // palette values for light mode PaletteOptions.mode?: PaletteMode | undefined
              divider: '#000',
              background: {
                default: '#fff',
                paper: '#fff',
              },
              text: {
                  primary: '#000',
                  secondary: "#333",
              },
            }
          : {
            // palette values for dark mode
            divider: '#000',
            background: {
              default: '#333',
              paper: '#fff',
            },
            text: {
              primary: '#000',
              secondary: '#000',
            },
        }),
      },
    }),
    [mode],
  );

  return (
    <html lang="en">
      <body className={inter.className}>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ElevationScroll {...props}>
              <Header elevation={undefined} children={props.children} />
              {/* <Box
                mr={'14px'}
                sx={{
                  borderRadius: '9px',
                  width: '55px',
                  height: '32px',
                  background: theme.palette.mode === "dark" ? '#ccc' : '#000',
                  padding: '5px 16px 4px 15px',
                  '&:hover': {
                    cursor: 'pointer',
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
                onClick={colorMode.toggleColorMode}
              >
                <Box sx={{ ml: 0 }} color="inherit">
                  {theme.palette.mode === "dark" ? <Brightness7Icon /> : <img src='/images/darkMode.png' style={{width: '23px'}} />}
                </Box>
              </Box> */}
            </ElevationScroll>
            <div id="back-to-top-anchor"></div>
            {props.children}
            <Footer />
            <ScrollTop {...props}>
              <Fab size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
              </Fab>
            </ScrollTop>
            <Analytics />
          </ThemeProvider>
        </ColorModeContext.Provider>
      </body>
    </html>
  )
}
