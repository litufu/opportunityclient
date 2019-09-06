import gql from "graphql-tag";
import COMPANY_FRAGMENT from './company.fragment'

const GET_COMPANIES_BY_INDUSTRY_INFLUENCE = gql`
    query CompaniesByInfluence(
      $keyword:String!
      $keywordDirection:Direction!
    ){
        companiesByInfluence(
          keyword:$keyword
          keywordDirection:$keywordDirection
          ){
          ...CompanyFragment
        }
    }
    ${COMPANY_FRAGMENT}
`

export default GET_COMPANIES_BY_INDUSTRY_INFLUENCE;