import gql from "graphql-tag";
import KEYWORD_FRAGMENT from './keyword.fragment'

const GET_ALL_KEYWORDS = gql`
    query AllKeywords{
        allKeywords{
          ...KeywordFragment
        }
    }
    ${KEYWORD_FRAGMENT}
`

export default GET_ALL_KEYWORDS;