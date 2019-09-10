import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Loading from '../../components/Loading'
import GET_INFLUENCES_BY_COMPANY from '../../graphql/influeces_by_company.query'

const direction = {
    "GOOD":"上升/增加",
    "BAD":"下降/减少"
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

export default function Influences(props) {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_INFLUENCES_BY_COMPANY,{
    variables: { symbol:props.symbol },
  });

  if (loading) return <Loading />;
  if (error) return <div>{error.message}</div>;

  return (
    <div className={classes.root}>
        {data.influencesByCompany.map((influence,index)=>(
            <div
            key={influence.id}
            >
            <Typography variant="h6" gutterBottom> 
            {`${index+1}、${influence.keyword.name}`}
            </Typography>
            <Typography variant="subtitle1" gutterBottom> 
                {`随着${influence.keyword.name}的 `}
                 {direction[influence.keywordDirection]  } 
                 {`  而   ${direction[influence.direction]}`}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {influence.desc}
            </Typography>
            </div>
            )
        )}
    </div>
  );
}