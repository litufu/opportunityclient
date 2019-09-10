import React,{Fragment} from 'react'
import { useLazyQuery } from '@apollo/react-hooks';
import { navigate } from "@reach/router"
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SearchBar from '../../components/SearchBar'
import Loading from '../../components/Loading'
import GET_COMPANIES from '../../graphql/get_companies.query';


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

export default function SearchCompany(){
    const [searchText, setSearchText] = React.useState("");
    const [companies, { loading,error, data }] = useLazyQuery(GET_COMPANIES);
    
    if (loading) return <Loading />;
    if (error) return <div>{error.message}</div>;

    return(
        <Fragment>
            <SearchBar 
              placeholder="根据关键词查找相关公司"
              inputValue={searchText}
              handleInputValue={(event)=>setSearchText(event.target.value)}
              search={()=>companies({ variables: { keyword:searchText } })}
            />
            {(data && data.companies) && (
                <SimpleTable 
                    companies={data.companies}
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
            onClick={()=>navigate(`/company/${company.symbol}`)}
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