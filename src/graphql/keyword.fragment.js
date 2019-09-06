import gql from 'graphql-tag';

const KEYWORD_FRAGMENT = gql`
  fragment KeywordFragment on Keyword {
    id
    name
 }
 
`
export default KEYWORD_FRAGMENT;