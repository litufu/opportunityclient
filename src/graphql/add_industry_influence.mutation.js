import gql from "graphql-tag";
import INDUSTRY_INFLUENCE_FRAGMENT from './industryInfluence.fragment'

const ADD_INDUSTRY_INFLUENCE = gql`
mutation AddIndustryInfluence(
    $industryName: String!
    $keyword: String!
    $keywordDirection:Direction!
    $kind: FactorKind!
    $desc: String!
    $direction: Direction!
) {
    addIndustryInfluence(
        industryName: $industryName
        keyword: $keyword
        keywordDirection:$keywordDirection
        kind: $kind
        desc: $desc
        direction: $direction

    ) {
        ...IndustryInfluenceFragment
    }
}
${INDUSTRY_INFLUENCE_FRAGMENT}
`

export default ADD_INDUSTRY_INFLUENCE;