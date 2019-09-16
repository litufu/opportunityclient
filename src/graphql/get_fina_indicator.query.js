import gql from "graphql-tag";
import FINA_INDICATOR_FRAGMENT from './fina_indicator.fragment'

const GET_COMPANY_FINA_INDICATORS = gql`
    query CompanyFinaIndicators(
      $symbol:String!
    ){
      companyFinaIndicators(
            symbol:$symbol
          ){
          ...FinaIndicatorFragment
        }
    }
    ${FINA_INDICATOR_FRAGMENT}
`

export default GET_COMPANY_FINA_INDICATORS;