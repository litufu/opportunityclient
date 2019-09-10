import gql from "graphql-tag";
import COMPANY_FRAGMENT from './company.fragment'

const GET_COMPANY = gql`
    query Company(
      $symbol:String!
    ){
        company(
            symbol:$symbol
          ){
          ...CompanyFragment
        }
    }
    ${COMPANY_FRAGMENT}
`

export default GET_COMPANY;