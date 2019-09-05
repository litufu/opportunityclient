import gql from 'graphql-tag';

const INDUSTRY_EVENT_FRAGMENT = gql`
  fragment IndustryEventFragment on IndustryEvent {
    id
    title
    src
    content
    reportTime
    happen
    happenTime
 }
 
 
`
export default INDUSTRY_EVENT_FRAGMENT;