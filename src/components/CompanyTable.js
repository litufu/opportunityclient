import React from 'react'
import { navigate } from "@reach/router"
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


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

export default function CompanyTable(props) {
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