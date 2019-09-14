import gql from 'graphql-tag';
import INDUSTRY_FRAGMENT from './industry.fragment'
import COMPANY_EVENT_FRAGMENT from './company_event.fragment'
import COMMENT_FRAGMENT from './comment.fragment'
import COMPANY_PRODUCT_FRAGMENT from './company_product.fragment'
import DAILY_FRAGMENT from './daily.fragment'

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
    dailies{
      ...DailyFragment
    }
    trades{
        ...IndustryFragment
    }
    events{
        ...CompanyEventFragment
    }
    comments{
      ...CommentFragment
    }
    purchases{
      ...CompanyProductFragment
    }
    selles{
      ...CompanyProductFragment
    }
 }
 ${DAILY_FRAGMENT}
 ${INDUSTRY_FRAGMENT}
 ${COMPANY_EVENT_FRAGMENT}
 ${COMMENT_FRAGMENT}
 ${COMPANY_PRODUCT_FRAGMENT}
 ${COMPANY_PRODUCT_FRAGMENT}
`
export default COMPANY_FRAGMENT;