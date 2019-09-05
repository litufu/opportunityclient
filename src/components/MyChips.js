import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(0.5),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function ChipsArray(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      {props.values.map(value => {
        return (
          <Chip
            key={value}
            label={value}
            onDelete={()=>props.handleDelete(value)}
            className={classes.chip}
          />
        );
      })}
    </Paper>
  );
}