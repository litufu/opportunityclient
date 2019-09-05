import gql from 'graphql-tag';
import INFLUENCE_FRAGMENT from './influence.fragment'
import PRODUCT_FRAGMENT from './product.fragment'

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
    influences{
        ...InfluenceFragment
    }
    purchases{
        ...ProductFragment
    }
    selles{
        ...ProductFragment
    }
 }
 ${INFLUENCE_FRAGMENT}
 ${PRODUCT_FRAGMENT}
 ${PRODUCT_FRAGMENT}
 
`
export default COMPANY_FRAGMENT;