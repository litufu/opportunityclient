import gql from 'graphql-tag';

const COMPANY_FRAGMENT = gql`
  fragment CompanyFragment on Company {
    id
    symbol
    name
    area
    industry
    fullname
    enname
    market
    exchange
    currType
    listStatus
    listDate
    delistDate
    isHS
    scope
    desc
    pool
  }
    
`
export default COMPANY_FRAGMENT;