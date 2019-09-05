import gql from 'graphql-tag';
import INDUSTRY_FRAGMENT from './industry.fragment'
import COMPANY_EVENT_FRAGMENT from './company_event.fragment'

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
    trades{
        ...IndustryFragment
    }
    events{
        ...CompanyEventFragment
    }
 }
 ${INDUSTRY_FRAGMENT}
 ${COMPANY_EVENT_FRAGMENT}
`
export default COMPANY_FRAGMENT;