import gql from "graphql-tag";
import KEYWORD_FRAGMENT from './keyword.fragment'

const ADD_KEYWORD = gql`
mutation AddKeyword(
    $keyword: String!
) {
    addKeyword(
        keyword: $keyword
    ) {
        ...KeywordFragment
    }
}
${KEYWORD_FRAGMENT}
`

export default ADD_KEYWORD;