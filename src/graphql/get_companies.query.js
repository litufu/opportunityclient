import gql from "graphql-tag";
import COMPANY_FRAGMENT from './company.fragment'

const GET_COMPANIES = gql`
    query Companies(
      $keyword:String!
    ){
      companies(
          keyword:$keyword
          ){
          ...CompanyFragment
        }
    }
    ${COMPANY_FRAGMENT}
`

export default GET_COMPANIES;