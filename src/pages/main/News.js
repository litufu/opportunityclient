import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
  },
  link: {
    margin: theme.spacing(1),
  },
}));

export default function OutlinedChips() {
  const classes = useStyles();

  function handleClick(name) {
    alert(name);
  }

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
        <Link 
        href={"http://data.eastmoney.com/notices/hsa.html"} 
        className={classes.link}
        rel="noopener"
        target="_blank"
        >
        个股公告
      </Link>
        </ListItem>
        <ListItem>
          <Typography>煤炭：</Typography>
        <Link 
        href={"http://www.cqcoal.com/"} 
        className={classes.link}
        rel="noopener"
        target="_blank"
        >
        秦皇岛煤炭网
      </Link>
        </ListItem>
        </List>
      
        <Chip 
      label="全部" 
      className={classes.chip} 
      clickable
      onClick={()=>handleClick("waihui")}
      color="primary"
       />
      <Chip 
      label="外汇" 
      className={classes.chip} 
      clickable
      onClick={()=>handleClick("waihui")}
      color="primary"
       />
       <Chip 
      label="石油" 
      clickable
      className={classes.chip} 
      onClick={()=>handleClick("waihui")}
      color="primary"
       />
       <Chip 
      label="黄金" 
      clickable
      className={classes.chip} 
      onClick={()=>handleClick("waihui")}
      color="primary"
       />
       <Chip 
      label="煤炭" 
      clickable
      className={classes.chip} 
      onClick={()=>handleClick("waihui")}
      color="primary"
       />
       <Chip 
      label="5G" 
      clickable
      className={classes.chip} 
      onClick={()=>handleClick("waihui")}
      color="primary"
       />
    </div>
  );
}