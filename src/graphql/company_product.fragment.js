import gql from 'graphql-tag';

const COMPANY_PRODUCT_FRAGMENT = gql`
  fragment CompanyProductFragment on CompanyProduct {
    id
    name
    introduce
 }
 
 
`
export default COMPANY_PRODUCT_FRAGMENT;