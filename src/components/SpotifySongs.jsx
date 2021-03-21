import React from 'react';
import clsx from 'clsx';
import {Typography,Divider,CssBaseline,IconButton,makeStyles,Drawer,Box,AppBar,Toolbar,List,Paper,Container,Grid} from '@material-ui/core/';
import {Menu as MenuIcon,ChevronLeft as ChevronLeftIcon,Brightness7 as MorningIcon,NightsStay as NightIcon,ArrowForwardIos as ArrowForwardIosIcon,ArrowBackIos as ArrowBackIosIcon} from '@material-ui/icons/';
import { mainListItems} from './listItems.jsx';
import Copyright from './copyright.jsx';
import SongsList from './SongsList.jsx';


const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#ffb0be',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    background: '#8782dc',
    color:'#fff',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(1),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 110,
  },
  SideLine :{
    width: `calc(100% - 55px)`,
    textAlign: 'left', 
    borderBottom: '1px solid grey',
    lineHeight: '0.1em',
    margin: '10px 0 20px', 
    color:'grey',
    display: 'inline-block'
 }, 
 SideLineSpan : { 
     background:'#fafafa',
     padding:'0 10px'
 },
 SideLineSpanRight : { 
    background:'#fafafa',
    float:'right'
}
}));

export default function Dashboard({...SongsData}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const SongsDetails = SongsData.SongsData;
  const fixedHeightPaper = clsx(classes.paper);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar color="primary" className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h5" color="inherit" noWrap className={classes.title}>
            SteinnLabs Spotify
          </Typography>
          
          <IconButton color="inherit">
          <Typography component="h6" variant="h6" color="inherit" noWrap className={classes.title}>
            All 
          </Typography>
              <MorningIcon style={{fill: "yellow"}} />
            </IconButton>
            <IconButton color="inherit">
              <NightIcon  style={{fill: "darkblue"}} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        {/*<ProfileData>{Username}</ProfileData>*/}
        <List>{mainListItems}</List>
        <Divider />
      </Drawer>
      <main position="relative" className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Songs Data */}
            {
           SongsDetails.map((asset,index)=>{
             return  ( 
               <Grid item xs={12} md={12} lg={12}>
                   <div>
                   <h6 className={classes.SideLine}><span className={classes.SideLineSpan}>
                   {index===0?'RELEASED THIS WEEK':index===1?'FEATURED PLAYLISTS':'BROWSE GENRES'}</span>
                   </h6>
                   <div className={classes.SideLineSpanRight}>
                   <IconButton  style={{borderRadius:'0%',padding:'0px'}}>
                     <ArrowBackIosIcon />
                   </IconButton>
                  <IconButton style={{borderRadius:'0%',padding:'0px'}}>
                    <ArrowForwardIosIcon />
                  </IconButton>
                  </div>
                 </div> 
               <Paper className={fixedHeightPaper} style={{padding:'0px'}}>
                 <SongsList SongsData={asset} BrowseCategory={asset.items[0].hasOwnProperty("icons")}></SongsList>
               </Paper>
              </Grid>
               )
             })
           }
           </Grid>
           <Box pt={4}>
            <Copyright />
           </Box>
        </Container>
      </main>
    </div>
  );
}
