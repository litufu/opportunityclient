import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useMutation } from '@apollo/react-hooks';
import ADD_ALL_FINA_INDICATOR from '../../graphql/add_all_fina_indicator.mutation'
import Loading from '../../components/Loading'


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Operation() {
  const classes = useStyles();
  const [addAllFinaIndicator,{loading,error}] = useMutation(ADD_ALL_FINA_INDICATOR);

  if(loading) return <Loading />
  if(error) return <div>{error.message}</div>

  return (
    <div>
      <Button 
      variant="contained"
       className={classes.button}
       onClick={()=>addAllFinaIndicator()}
       >
        添加所有的财务数据
      </Button>
    </div>
  );
}