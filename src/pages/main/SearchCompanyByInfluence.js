import React,{Fragment} from 'react'
import { useLazyQuery } from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Loading from '../../components/Loading'
import SelectKeyword from '../../components/SelectKeyword'
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import GET_COMPANIES_BY_INDUSTRY_INFLUENCE from '../../graphql/get_companies_by_industry_influence.query';


const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    container:{
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    table: {
      minWidth: 650,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 500,
      },
      button: {
        margin: theme.spacing(1),
        width:510
      },
  }));

export default function SearchCompanyByInfluence(){
    const classes = useStyles();
    const [keyword, setKeyword] = React.useState("");
    const [keywordDirection, setKeywordDirection] = React.useState("GOOD");
    const [companiesByInfluence, { loading,error, data }] = useLazyQuery(
        GET_COMPANIES_BY_INDUSTRY_INFLUENCE,
        {
            fetchPolicy:"network-only",
        }
        );
    
    if (loading) return <Loading />;
    if (error) return <div>{error.message}</div>;

    return(
        <Fragment>
            <div className={classes.container}>
            <SelectKeyword
                handleSelect={(value)=>{
                    setKeyword(value)}
                }
            />
            <FormControl className={classes.formControl}>
            <InputLabel htmlFor="direction-simple">关键影响因素变动方向</InputLabel>
            <Select
            value={keywordDirection}
            onChange={(event)=>setKeywordDirection(event.target.value)}
            inputProps={{
                name: 'deal',
                id: 'deal-simple',
            }}
            >
            <MenuItem value="GOOD">上升/增加/上涨/升值</MenuItem>
            <MenuItem value="BAD">下降/减少/回落/贬值</MenuItem>
            </Select>
            </FormControl>
            <Button 
                color="primary" 
                fullWidth
                variant="contained"
                onClick={()=>{
                    companiesByInfluence({variables:{keyword,keywordDirection}})}
                }
                className={classes.button}>
                提交
            </Button>
            </div>
            {(data && data.companiesByInfluence.length>0) && (
                <SimpleTable 
                    companies={data.companiesByInfluence}
                />)
            }
        </Fragment>
    )
}


function SimpleTable(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>股票代码</TableCell>
            <TableCell align="right">公司简称</TableCell>
            <TableCell align="right">所属行业</TableCell>
            <TableCell align="right">上市日期</TableCell>
            <TableCell align="right">所在地域</TableCell>
            <TableCell align="right">是否沪深港通标的</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.companies.map(company => (
            <TableRow 
            key={company.name}
            onClick={()=>alert(company.name)}
            >
              <TableCell component="th" scope="row">
                {company.symbol}
              </TableCell>
              <TableCell align="right">{company.name}</TableCell>
              <TableCell align="right">{company.industry}</TableCell>
              <TableCell align="right">{company.listDate}</TableCell>
              <TableCell align="right">{company.area}</TableCell>
              <TableCell align="right">{company.isHS}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}