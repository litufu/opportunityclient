import gql from "graphql-tag";
import INDUSTRY_INFLUENCE_FRAGMENT from './industryInfluence.fragment'

const GET_INFLUENCES_BY_COMPANY = gql`
    query InfluencesByCompany(
      $symbol:String!
    ){
        influencesByCompany(
            symbol:$symbol
          ){
          ...IndustryInfluenceFragment
        }
    }
    ${INDUSTRY_INFLUENCE_FRAGMENT}
`

export default GET_INFLUENCES_BY_COMPANY;