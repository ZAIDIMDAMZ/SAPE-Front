import React from 'react';
import  '../toolBar/Toolbar.css'
import{AppBar,Toolbar,Typography,IconButton,Menu,MenuItem,makeStyles}from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

const ITEM_HEIGHT = 48;

//Values of list
const options = [
    'Profile',
    'Déconnexion'
];

//Styles to use
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="more" aria-controls="long-menu"
                aria-haspopup="true" onClick={handleClick}>
                <MenuIcon />
                
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: 200,
                    },
                }}
                >
                {options.map(option => (
                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                    {option}
                    </MenuItem>
                ))}
            </Menu>

          <Typography variant="h6" color="inherit">
            SAPE
          </Typography>
          <div className="spacer"></div>
          <div className="toolbar_navigation-items">
                    <a href="#">Déconnexion</a>
                </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}