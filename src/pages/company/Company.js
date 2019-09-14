import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
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
import Loading from '../../components/Loading'
import Influences from './Influences'
import Toolbar, { styles as toolbarStyles } from '../../components/Toolbar';
import GET_COMPANY from '../../graphql/company.query'
import {dateToString} from '../../utils'

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

export default function Company(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [display, setDisplay] = React.useState("main");
  const { loading, error, data } = useQuery(GET_COMPANY,{
    variables: { symbol:props.symbol },
  });

  if (loading) return <Loading />;
  if (error) return <div>{error.message}</div>;

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
            <ListItem
             button
             onClick={()=>setDisplay("main")}
             >
              <ListItemIcon>
                 <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="综述" />
            </ListItem>
            <ListItem
             button
             onClick={()=>setDisplay("industry")}
             >
              <ListItemIcon>
                 <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="行业研究" />
            </ListItem>
            <ListItem
             button
             onClick={()=>setDisplay("influence")}
             >
              <ListItemIcon>
                 <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="关键因素" />
            </ListItem>
            <ListItem
             button
             onClick={()=>setDisplay("event")}
             >
              <ListItemIcon>
                 <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="重大事件" />
            </ListItem>
            <ListItem
             button
             onClick={()=>setDisplay("companyDesc")}
             >
              <ListItemIcon>
                 <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="公司自述" />
            </ListItem>
            <ListItem
             button
             onClick={()=>setDisplay("achievement")}
             >
              <ListItemIcon>
                 <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="业绩预测" />
            </ListItem>
        </List>
        <Divider />
  
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {
            display==="main" && (
                <Fragment>
                  {data.company.comments.map((comment)=>(
                    <Typography
                    key={comment.id}
                    paragraph >
                     {dateToString(new Date(comment.createTime))}: {comment.desc}
                      </Typography>
                  ))}
              </Fragment>
              
              
            )
        }
          {
        display==="influence" && (
          <Influences
          symbol={data.company.symbol}
          />
        )
      }
       {
        display==="companyDesc" && (
         <Typography>
           {data.company.desc}
         </Typography>
        )
      }
      {
        display==="industry" && (
         <div>
           {data.company.trades.map((industry)=>(
             <Fragment key={industry.id}>
                  <div>
                    {`${industry.name}:`}
                    </div>
                    <div>{industry.desc}
                  </div>
                  {industry.researches.map((research,index)=>(
                    <div key={research.id}>
                      {index+1} ---- {research.desc}
                    </div>
                  ))}
               </Fragment>
           ))}
         </div>
        )
      }
      </main>
    </div>
  );
}