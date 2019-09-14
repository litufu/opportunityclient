import gql from 'graphql-tag';

const RESEARCG_FRAGMENT = gql`
  fragment ResearchFragment on Research {
    id
    desc
 }
`
export default RESEARCG_FRAGMENT;