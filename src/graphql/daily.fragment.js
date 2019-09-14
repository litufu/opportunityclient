import gql from 'graphql-tag';

const DAILY_FRAGMENT = gql`
  fragment DailyFragment on Daily {
    id
    symbol
    tradeDate
    open
    high
    low
    close
    preClose
    change
    pctChg
    vol
    amount
 }
 
`
export default DAILY_FRAGMENT;