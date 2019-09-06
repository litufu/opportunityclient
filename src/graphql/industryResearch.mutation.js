import gql from "graphql-tag";
import INDUSTRY_FRAGMENT from './industry.fragment'

const INDUSTRY_RESEARCH = gql`
mutation IndustryResearch(
    $industryName: String!
    $research:String!
) {
    industryResearch(
        industryName: $industryName
        research: $research
    ) {
        ...IndustryFragment
    }
}
${INDUSTRY_FRAGMENT}
`

export default INDUSTRY_RESEARCH;