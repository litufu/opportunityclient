import gql from 'graphql-tag';
import RESEARCG_FRAGMENT from './research.fragment'

const INDUSTRY_FRAGMENT = gql`
  fragment IndustryFragment on Industry {
    id
    code
    name
    desc
    researches{
      ...ResearchFragment
    }
 }
 ${RESEARCG_FRAGMENT}
`
export default INDUSTRY_FRAGMENT;