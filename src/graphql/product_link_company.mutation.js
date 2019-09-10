import gql from "graphql-tag";
import COMPANY_FRAGMENT from './company.fragment'

const PRODUCT_LINK_COMPANY = gql`
mutation ProductLinkCompany(
    $companyName: String!
    $productName: String!
    $deal: String!
) {
    productLinkCompany(
        companyName: $companyName
        productName: $productName
        deal:$deal
    ) {
        ...CompanyFragment
    }
}
${COMPANY_FRAGMENT}
`

export default PRODUCT_LINK_COMPANY;