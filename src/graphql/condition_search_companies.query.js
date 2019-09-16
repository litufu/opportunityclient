import gql from "graphql-tag";
import COMPANY_FRAGMENT from './company.fragment'

const GET_CONDITION_SEARCH_COMPANIES = gql`
    query ConditionSearchCompanies(
      $years:Int
      $qSalesYoy:Float
      $dtNetprofitYoy:Float
      $endDate:String
    ){
      conditionSearchCompanies(
            years:$years
            qSalesYoy:$qSalesYoy,
            dtNetprofitYoy:$dtNetprofitYoy
            endDate:$endDate
          ){
          ...CompanyFragment
        }
    }
    ${COMPANY_FRAGMENT}
`

export default GET_CONDITION_SEARCH_COMPANIES;