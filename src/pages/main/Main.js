import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SearchKeyword from './SearchKeyword'
import SearchCompany from './SearchCompany'
import News from './News'
import BottomCross from './BottomCross'
import BottomVolume from './BottomVolume'
import ConditonSearch from './ConditonSearch'
import SearchCompanyByInfluence from './SearchCompanyByInfluence'
import InfluenceList from './InfluenceList'
import Toolbar, { styles as toolbarStyles } from '../../components/Toolbar';

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
  placeholder: toolbarStyles(theme).root,
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Main() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [display, setDisplay] = React.useState("news");

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            格物投研
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
      </div>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
        `<ListItem
             button
             onClick={()=>setDisplay("news")}
             >
              <ListItemIcon>
                  <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="新闻列表" />
            </ListItem>
            <ListItem
             button
             onClick={()=>setDisplay("searchKeyword")}
             >
              <ListItemIcon>
                  <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="关键词查询" />
            </ListItem>
            <ListItem
             button
             onClick={()=>setDisplay("searchCompany")}
             >
              <ListItemIcon>
                  <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="公司查询" />
            </ListItem>
            <ListItem
             button
             onClick={()=>setDisplay("searchCompanyByInfluence")}
             >
              <ListItemIcon>
                  <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="驱动要素波动查询" />
            </ListItem>
            <ListItem
             button
             onClick={()=>setDisplay("InfluenceList")}
             >
              <ListItemIcon>
                  <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="关键驱动因素列表" />
            </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem
             button
             onClick={()=>setDisplay("BottomCross")}
             >
              <ListItemIcon>
                  <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="底部十字星股票" />
            </ListItem>
            <ListItem
             button
             onClick={()=>setDisplay("BottomVolume")}
             >
              <ListItemIcon>
                  <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="底部放量星股票" />
            </ListItem>
            <ListItem
             button
             onClick={()=>setDisplay("listYears")}
             >
              <ListItemIcon>
                  <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="公司上市年限查询" />
            </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {
            display==="news" && (
              <News />
            )
        }
        {
            display==="searchKeyword" && (
                <SearchKeyword 
                />
            )
        }
        {
            display==="searchCompany" && (
                <SearchCompany 
                />
            )
        }
        {
            display==="searchCompanyByInfluence" && (
                <SearchCompanyByInfluence 
                />
            )
        }
        {
            display==="InfluenceList" && (
                <InfluenceList 
                />
            )
        }
        {
            display==="BottomCross" && (
                <BottomCross
                />
            )
        }
        {
            display==="BottomVolume" && (
                <BottomVolume
                />
            )
        }
         {
            display==="listYears" && (
                <ConditonSearch
                />
            )
        }
      </main>
    </div>
  );
}