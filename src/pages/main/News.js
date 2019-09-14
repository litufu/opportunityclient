import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
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
        <Chip 
      label="所有" 
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