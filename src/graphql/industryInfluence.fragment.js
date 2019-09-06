import gql from 'graphql-tag';
import KEYWORD_FRAGMENT from './keyword.fragment'

const INDUSTRY_INFLUENCE_FRAGMENT = gql`
  fragment IndustryInfluenceFragment on IndustryInfluence {
    id
    kind
    desc
    direction
    keywordDirection
    keyword{
        ...KeywordFragment
    }
 }${KEYWORD_FRAGMENT}
 
 
`
export default INDUSTRY_INFLUENCE_FRAGMENT;