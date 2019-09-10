import React from 'react';
import {  useQuery } from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GET_ALL_KEYWORDS from '../../graphql/all_keywords.query'
import Loading from '../../components/Loading'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));


export default function InteractiveList() {
  const classes = useStyles();
  const { loading,error, data } = useQuery(GET_ALL_KEYWORDS);

  if (loading) return <Loading />;
  if (error) return <div>{error.message}</div>;

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            驱动因素列表
          </Typography>
          <div className={classes.demo}>
            <List >
              {data.allKeywords.map(keyword=>(
                <ListItem
                key={keyword.id}
                >
                  <ListItemText
                    primary={keyword.name}
                  />
                </ListItem>)
              )}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}