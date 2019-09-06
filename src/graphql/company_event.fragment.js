import gql from 'graphql-tag';

const COMPANY_EVENT_FRAGMENT = gql`
  fragment CompanyEventFragment on CompanyEvent {
    id
    title
    content
    reportTime
    happen
    happenTime
    influence
    kind
    direction
 }
 
 
`
export default COMPANY_EVENT_FRAGMENT;