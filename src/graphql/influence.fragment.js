import gql from 'graphql-tag';
import KEYWORD_FRAGMENT from './keyword.fragment'

const INFLUENCE_FRAGMENT = gql`
  fragment InfluenceFragment on Influence {
    id
    kind
    name
    desc
    dierction
    keywords{
        ...KeywordFragment
    }
 }${KEYWORD_FRAGMENT}
 
 
`
export default INFLUENCE_FRAGMENT;