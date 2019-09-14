import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useLazyQuery } from '@apollo/react-hooks';
import Loading from '../../components/Loading'
import CompanyTable from '../../components/CompanyTable'
import GET_BOTTOMCROSSCOMPANIES from '../../graphql/bottomCross_companies.query'


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
  },
}));


export default function TextFields() {
  const classes = useStyles();
  const [nowDay,setNowDay] = React.useState("")
  const [beforeDays,setBeforeDays] = React.useState(15)
  const [firstNum,setFirstNum] = React.useState(100)
  const [resNum,setResNum] = React.useState(20)
  const [bottomCrossCompanies, { loading,error, data }] = useLazyQuery(GET_BOTTOMCROSSCOMPANIES);
    
    if (loading) return <Loading />;
    if (error) return <div>{error.message}</div>;

  return (
      <div>
           <Typography variant="subtitle2" gutterBottom>
        获取查询日期当日十字星形态股票数量，然后比较这些股票当日价格与前几日价格下跌程度，按照下跌程度排序并获取前几名。
        查询日期：2019-9-12，选择十字星股票100支，然后查询这些股票与前15日相比股票下跌程度，然后最终抽取排序前15名的股票。
      </Typography>
     
    <form className={classes.container} noValidate autoComplete="off">
       
      <TextField
        id="standard-nowday"
        label="查询日期"
        className={classes.textField}
        value={nowDay}
        onChange={(event)=>setNowDay(event.target.value)}
        margin="normal"
      />
      <TextField
        id="standard-beforeDays"
        label="查询日期前几日"
        className={classes.textField}
        value={beforeDays}
        onChange={(event)=>setBeforeDays(event.target.value)}
        margin="normal"
      />
      <TextField
        id="standard-beforeDays"
        label="十字星股票前几名"
        className={classes.textField}
        value={firstNum}
        onChange={(event)=>setFirstNum(event.target.value)}
        margin="normal"
      />
      <TextField
        id="standard-beforeDays"
        label="跌幅前几名"
        className={classes.textField}
        value={resNum}
        onChange={(event)=>setResNum(event.target.value)}
        margin="normal"
      />
      <Button 
      variant="contained" 
      className={classes.button}
      onClick={()=>{
        bottomCrossCompanies({variables:{
            nowDay,
            beforeDays:parseInt(beforeDays),
            firstNum:parseInt(firstNum),
            resNum:parseInt(resNum)
        }})}
        }
      >
        查询
      </Button>
    </form>
    {(data && data.bottomCrossCompanies) && (
                <CompanyTable 
                    companies={data.bottomCrossCompanies}
                />)
            }
    </div>
  );
}