import gql from 'graphql-tag';

const INDUSTRY_FRAGMENT = gql`
  fragment IndustryFragment on Industry {
    id
    code
    name
    desc
 }
 
 
`
export default INDUSTRY_FRAGMENT;