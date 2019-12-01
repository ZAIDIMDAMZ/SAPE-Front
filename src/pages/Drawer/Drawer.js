import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme,Drawer,CssBaseline,AppBar,Toolbar,List,Typography,Divider,IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import './../../App.css';
import '../Drawer/MyCSSDrawer.css'
import logoSite from '../../images/Cons.png'

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  
  let tel = <Typography key="8" className="CenterText" ><b>Tel: (+33) 169 477 000</b></Typography>
  let adresse1 = <Typography key="9" className="CenterText" ><b>23 Boulevard François Mitterand</b></Typography>
  let adresse2 = <Typography key="10" className="CenterText" ><b>91000, Evry</b></Typography>
  let linkProfil=<div key="3" className="form-link"><a href="/Profil" >Profil</a></div>
  let Deconnexion=<div key="4" className="form-link"><a href="/" >Déconnexion</a></div> 
  let linkMail=<div key="4" className="form-link"><a href="https://mail.google.com/mail/u/0/#inbox?compose=new"><b>contact@sape.com</b></a></div> 
  let titreListe=<Typography key="5" className="CenterText" variant="h3" color="inherit">SAPE</Typography>
  let insertlogoSite=<center key="6"><img src= {logoSite} alt='Error lors du chargement du logo'/></center>
 
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={clsx(classes.appBar,{[classes.appBarShift]: open,})}>
        <Toolbar className="BackToolbar">
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" className={clsx(classes.menuButton,open && classes.hide)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <img src= {logoSite} alt='Error lors du chargement du logo'/>
          </Typography>
          <div className="spacer"></div>
          <div className="toolbar_navigation-items">
            <a href="/">Déconnexion</a>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer className={classes.drawer} variant="persistent" anchor="left" open={open} classes={{paper: classes.drawerPaper,}}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List className="BackToolbar" >
          {[titreListe, insertlogoSite]}
        </List>
        <Divider />
        <List>
          {[linkProfil, Deconnexion]}
        </List>
        <Divider />
        <List>
          {[tel, linkMail,adresse1,adresse2]}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
}
