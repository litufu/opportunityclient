import React, { Fragment } from 'react';
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
import AddProduct from './AddProduct'
import AddCompanyProduct from './AddCompanyProduct'
import AddIndustry from './AddIndustry'
import ProductLinkIndustry from './ProductLinkIndustry'
import ProductLinkCompany from './ProductLinkCompany'
import CompanyLinkIndustry from './CompanyLinkIndustry'
import IndustryResearch from './IndustryResearch'
import AddKeyword from './AddKeyword'
import IndustryInfluence from './IndustryInfluence'
import AddCompanyComment from './AddCompanyComment'
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

export default function Company() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [display, setDisplay] = React.useState("main");

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
            格物投研后台管理系统
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
             onClick={()=>setDisplay("addProduct")}
             >
              <ListItemIcon>
                 <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="添加行业标准产品" />
            </ListItem>
            <ListItem
             button
             onClick={()=>setDisplay("addCompanyProduct")}
             >
              <ListItemIcon>
                 <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="添加公司级产品" />
            </ListItem>
            <ListItem
             button
             onClick={()=>setDisplay("addIndustry")}
             >
              <ListItemIcon> 
                  <InboxIcon />
             </ListItemIcon>
              <ListItemText primary="创建行业" />
            </ListItem>
            <ListItem
             button
             onClick={()=>setDisplay("productLinkIndustry")}
             >
              <ListItemIcon> 
                  <InboxIcon />
             </ListItemIcon>
              <ListItemText primary="行业产品及服务" />
            </ListItem>
            <ListItem
             button
             onClick={()=>setDisplay("productLinkCompany")}
             >
              <ListItemIcon> 
                  <InboxIcon />
             </ListItemIcon>
              <ListItemText primary="公司产品及服务" />
            </ListItem>
            <ListItem
             button
             onClick={()=>setDisplay("companyLinkIndustry")}
             >
              <ListItemIcon> 
                  <InboxIcon />
             </ListItemIcon>
              <ListItemText primary="行业和公司" />
            </ListItem>
            <ListItem
             button
             onClick={()=>setDisplay("industryResearch")}
             >
              <ListItemIcon> 
                  <InboxIcon />
             </ListItemIcon>
              <ListItemText primary="行业研究" />
            </ListItem>
            <ListItem
             button
             onClick={()=>setDisplay("addKeyword")}
             >
              <ListItemIcon> 
                  <InboxIcon />
             </ListItemIcon>
              <ListItemText primary="添加关键因素" />
            </ListItem>
            <ListItem
             button
             onClick={()=>setDisplay("industryInfluence")}
             >
              <ListItemIcon> 
                  <InboxIcon />
             </ListItemIcon>
              <ListItemText primary="行业关键影响因素" />
            </ListItem>
            <ListItem
             button
             onClick={()=>setDisplay("companyComment")}
             >
              <ListItemIcon> 
                  <InboxIcon />
             </ListItemIcon>
              <ListItemText primary="公司评价" />
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
                <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                donec massa sapien faucibus et molestie ac.
              </Typography>
              <Typography paragraph>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
              </Typography>
              </Fragment>
            )
        }
        {
            display==="addProduct" && (
                <AddProduct 
                />
            )
        }
        {
            display==="addCompanyProduct" && (
                <AddCompanyProduct 
                />
            )
        }
           {
            display==="addIndustry" && (
                <AddIndustry 
                />
            )
        }
        {
            display==="productLinkIndustry" && (
                <ProductLinkIndustry 
                />
            )
        }
        {
            display==="productLinkCompany" && (
                <ProductLinkCompany 
                />
            )
        }
        {
            display==="companyLinkIndustry" && (
                <CompanyLinkIndustry 
                />
            )
        }
        {
            display==="industryResearch" && (
                <IndustryResearch 
                />
            )
        }
        {
            display==="addKeyword" && (
                <AddKeyword 
                />
            )
        }
        {
            display==="industryInfluence" && (
                <IndustryInfluence 
                />
            )
        }
         {
            display==="companyComment" && (
                <AddCompanyComment 
                />
            )
        }
      </main>
    </div>
  );
}