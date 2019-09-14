import gql from "graphql-tag";
import COMPANY_FRAGMENT from './company.fragment'

const GET_BOTTOMCROSSCOMPANIES = gql`
    query BottomCrossCompanies(
      $nowDay:String!
      $beforeDays:Int
      $firstNum:Int
      $resNum:Int
    ){
        bottomCrossCompanies(
          nowDay:$nowDay
          beforeDays:$beforeDays
          firstNum:$firstNum
          resNum:$resNum
          ){
          ...CompanyFragment
        }
    }
    ${COMPANY_FRAGMENT}
`

export default GET_BOTTOMCROSSCOMPANIES;