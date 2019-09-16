import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useLazyQuery } from '@apollo/react-hooks';
import Loading from '../../components/Loading'
import CompanyTable from '../../components/CompanyTable'
import GET_CONDITION_SEARCH_COMPANIES from '../../graphql/condition_search_companies.query'


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


export default function ConditonSearch() {
  const classes = useStyles();
  const [years,setYears] = React.useState("")
  const [qSalesYoy,setQSalesYoy] = React.useState(0.00)
  const [dtNetprofitYoy,setDtNetprofitYoy] = React.useState(0.00)
  const [endDate,setEndDate] = React.useState("")
  const [conditionSearchCompanies, { loading,error, data }] = useLazyQuery(GET_CONDITION_SEARCH_COMPANIES);
    
    if (loading) return <Loading />;
    if (error) return <div>{error.message}</div>;

  return (
      <div>
           <Typography variant="subtitle2" gutterBottom>
        股票上市三年公司股票可以减持，如果股东拟进行减持，一般会把上市第二年的业绩隐藏起来，然后第三年业绩做出大幅增长的态势，到第四年头上便于出货。
      </Typography>
     
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="standard-nowday"
        label="上市年数"
        className={classes.textField}
        value={years}
        onChange={(event)=>setYears(event.target.value)}
        margin="normal"
      />
      <TextField
        id="standard-nowday"
        label="报告基准日"
        className={classes.textField}
        value={endDate}
        onChange={(event)=>setEndDate(event.target.value)}
        margin="normal"
      />
      <TextField
        id="standard-nowday"
        label="营业收入同比增长率(单季度)"
        className={classes.textField}
        value={qSalesYoy}
        onChange={(event)=>setQSalesYoy(event.target.value)}
        margin="normal"
      />
      <TextField
        id="standard-nowday"
        label="扣非归母净利润增长率"
        className={classes.textField}
        value={dtNetprofitYoy}
        onChange={(event)=>setDtNetprofitYoy(event.target.value)}
        margin="normal"
      />
      
      <Button 
      variant="contained" 
      className={classes.button}
      onClick={()=>{
        conditionSearchCompanies({variables:{
            years:parseInt(years),
            qSalesYoy:parseFloat(qSalesYoy),
            dtNetprofitYoy:parseFloat(dtNetprofitYoy),
            endDate,
        }})}
        }
      >
        查询
      </Button>
    </form>
    {(data && data.conditionSearchCompanies) && (
                <CompanyTable 
                    companies={data.conditionSearchCompanies}
                />)
            }
    </div>
  );
}