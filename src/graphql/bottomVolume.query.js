import gql from "graphql-tag";
import COMPANY_FRAGMENT from './company.fragment'

const GET_BOTTOMVOLUME = gql`
    query BottomVolume(
      $nowDay:String!
      $yesterday:String!
      $beforeDays:Int
      $firstNum:Int
      $resNum:Int
      $direction:String
    ){
        bottomVolume(
          nowDay:$nowDay
          yesterday:$yesterday
          beforeDays:$beforeDays
          firstNum:$firstNum
          resNum:$resNum
          direction:$direction
          ){
          ...CompanyFragment
        }
    }
    ${COMPANY_FRAGMENT}
`

export default GET_BOTTOMVOLUME;