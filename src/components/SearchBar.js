import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import DirectionsIcon from '@material-ui/icons/Directions';
import {  maxWidth } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: maxWidth,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedInputBase(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder={props.placeholder}
        inputProps={{ 'aria-label': 'search google maps' }}
        value={props.inputValue}
        onChange={props.handleInputValue}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton 
      onClick={props.search}
      color="primary" className={classes.iconButton} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
    </Paper>
  );
}