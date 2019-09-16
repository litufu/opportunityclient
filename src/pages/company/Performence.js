import React ,{Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { useQuery,useMutation } from '@apollo/react-hooks';
import GET_COMPANY_FINA_INDICATORS from '../../graphql/get_fina_indicator.query'
import ADD_FINA_INDICATOR from '../../graphql/add_fina_indicator.mutation'
import Loading from '../../components/Loading'
import {dateToString} from '../../utils'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Performence(props) {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_COMPANY_FINA_INDICATORS,
   {
      variables: { symbol:props.code },
    });
  const [addFinaIndicator] = useMutation(ADD_FINA_INDICATOR);

  if (loading) return <Loading />;
  if (error) return <div>{error.message}</div>;

  return (
    <Fragment>
    <Button 
        variant="contained" 
        className={classes.button}
        onClick={()=>addFinaIndicator({variables:{code:props.code}})}
        >
            获取财务指标
        </Button>
    <Paper className={classes.root}>
        
      <Table className={classes.table} stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>报告期</TableCell>
            <TableCell align="right">每股收益</TableCell>
            <TableCell align="right">净资产收益率</TableCell>
            <TableCell align="right">加权净资产收益率</TableCell>
            <TableCell align="right">扣非净资产收益率</TableCell>
            <TableCell align="right">扣非净利润</TableCell>
            <TableCell align="right">摊薄每股收益</TableCell>
            <TableCell align="right">销售毛利率</TableCell>
            <TableCell align="right">资产负债率</TableCell>
            <TableCell align="right">每股收益增长率</TableCell>
            <TableCell align="right">营业收入同比增长率</TableCell>
            <TableCell align="right">扣非归母净利润同比增长率</TableCell>
            <TableCell align="right">营业收入同比增长率(单季度)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.companyFinaIndicators.map(finaIndicator => (
            <TableRow key={finaIndicator.id}>
              <TableCell component="th" scope="row">
                {dateToString(new Date(finaIndicator.endDate))}
              </TableCell>
              <TableCell align="right">{finaIndicator.eps}</TableCell>
              <TableCell align="right">{finaIndicator.roe}</TableCell>
              <TableCell align="right">{finaIndicator.roeWaa}</TableCell>
              <TableCell align="right">{finaIndicator.roeDt}</TableCell>
              <TableCell align="right">{finaIndicator.profitDedt	}</TableCell>
              <TableCell align="right">{finaIndicator.diluted2Eps}</TableCell>
              <TableCell align="right">{finaIndicator.grossprofitMargin}</TableCell>
              <TableCell align="right">{finaIndicator.debtToAssets}</TableCell>
              <TableCell align="right">{finaIndicator.basicEpsYoy}</TableCell>
              <TableCell align="right">{finaIndicator.orYoy}</TableCell>
              <TableCell align="right">{finaIndicator.dtNetprofitYoy}</TableCell>
              <TableCell align="right">{finaIndicator.qSalesYoy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </Fragment>
  );
}