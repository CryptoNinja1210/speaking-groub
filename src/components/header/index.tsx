/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { useNavigate } from 'react-router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ExpandMore } from '@mui/icons-material';

interface Props {
  elevation: number | undefined;
  window?: () => Window;
  children: React.ReactElement;
}
const pages = [
	{
		name: 'Product',
		url: '/',
	},
	{
		name: 'Pricing',
		url: '/courses',
	},
	{
		name: 'About Us',
		url: '/about-us',
	},
];

function ResponsiveAppBar(props: Props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

	const goToPage = (e: any) => {
		// navigate(e)
	};

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed"
      sx={{
        // border: theme.palette.mode === "dark" ? '1px solid black' : '0',
        padding: {xs: '0 10px', sm:'0 36px' , md: '0 72px', lg: '0 128px'},
        bgcolor: props.elevation? '#fff':'#0000',
        marginTop: props.elevation? '': '20px',
      }}
      // elevation = {theme.palette.mode === "dark" ? 4 : 0}
      elevation={props.elevation}
    >
      <Toolbar className=' tw-flex tw-justify-between' disableGutters>
        <Box
          sx={{
            width: { xs: '70px', sm: '105px', md: '150px' }
          }}
        >
          <img src='/images/logo.svg'
            style={{
              width: '100%',
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            padding: { xs: '0px', sm: '10px', md: '15px' },
            }}
          >
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => goToPage(page.url)}
                sx={{
                  fontWeight: '800',
                  textTransform: 'none',
                  fontSize: '14px',
                  my: 0,
                  mr: 4,
                  bgcolor: '#00b68780',
                  color: 'white',
                  borderRadius: 2,
                  '&:hover' : {bgcolor: '#00b687'},
                  '&:active' : {bgcolor: '#00b687'},
                  '&:focus' : {bgcolor: '#00b687'},
                  display: 'block'
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display:'flex', alignItems: 'center' }}>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{
                  color: '#DEB972',
                  boxShadow: '0px 0px 5px 5px rgba(0, 0, 0, 0.10)',
                  marginRight: '10px'
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={() => goToPage(page.url)} className=' tw-mr-10'>
                    <Typography textAlign="center">{page.name}1</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Button
              sx={{
                borderRadius: '9px',
                color: 'white',
                backgroundColor: '#c99e4a',
                padding: ' 6px 15px 5px 14px',
                fontWeight: '700',
                fontSize: '14px',
                textTransform: 'none',
                '&:hover': {
                  cursor: 'pointer',
                  backgroundColor: '#D5A340',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              Login Here!
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;