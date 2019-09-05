import gql from "graphql-tag";
import INDUSTRY_FRAGMENT from './industry.fragment'

const CREATE_INDUSTRY = gql`
mutation CreateIndustry(
    $name: String!
    $desc: String!
) {
    createIndustry(
        name: $name
        desc: $desc
    ) {
        ...IndustryFragment
    }
}
${INDUSTRY_FRAGMENT}
`

export default CREATE_INDUSTRY;