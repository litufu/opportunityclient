import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useLazyQuery } from '@apollo/react-hooks';
import Loading from '../../components/Loading'
import CompanyTable from '../../components/CompanyTable'
import GET_BOTTOMVOLUME from '../../graphql/bottomVolume.query'


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
  const [yesterday,setYesterday] = React.useState("")
  const [beforeDays,setBeforeDays] = React.useState(20)
  const [firstNum,setFirstNum] = React.useState(100)
  const [direction,setDirection] = React.useState("up")
  const [resNum,setResNum] = React.useState(15)
  const [bottomVolume, { loading,error, data }] = useLazyQuery(GET_BOTTOMVOLUME);
    
    if (loading) return <Loading />;
    if (error) return <div>{error.message}</div>;

  return (
      <div>
           <Typography variant="subtitle2" gutterBottom>
        获取查询日期当日股票的成交量与上一日成交量的比例，按照成交比例从高到底排序获取放大量前几名。然后比较这些股票当日价格与前几日价格下跌程度，按照下跌程度排序并获取前几名。
        查询日期：2019-9-12，前一交易日：2019-9-11，选择成交量放大股票前100支，然后查询这些股票与前20日相比股票下跌程度，然后最终抽取排序前30名的股票。
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
        id="standard-nowday"
        label="上一交易日"
        className={classes.textField}
        value={yesterday}
        onChange={(event)=>setYesterday(event.target.value)}
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
         <TextField
        id="standard-select-currency-native"
        select
        label="放量/缩量"
        className={classes.textField}
        value={direction}
        onChange={(event)=>setDirection(event.target.value)}
        SelectProps={{
          native: true,
          MenuProps: {
            className: classes.menu,
          },
        }}
        margin="normal"
      >
          <option value={"up"}>
            放量
          </option>
          <option value={"down"}>
            缩量
          </option>
      </TextField>
      <Button 
      variant="contained" 
      className={classes.button}
      onClick={()=>{
        bottomVolume({variables:{
            nowDay,
            yesterday,
            beforeDays:parseInt(beforeDays),
            firstNum:parseInt(firstNum),
            resNum:parseInt(resNum),
            direction,
        }})}
        }
      >
        查询
      </Button>
    </form>
    {(data && data.bottomVolume) && (
                <CompanyTable 
                    companies={data.bottomVolume}
                />)
            }
    </div>
  );
}