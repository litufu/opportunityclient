import gql from "graphql-tag";
import INDUSTRY_FRAGMENT from './industry.fragment'

const PRODUCT_LINK_INDUSTRY = gql`
mutation ProductLinkIndustry(
    $industryName: String!
    $productName: String!
    $deal: String!
) {
    productLinkIndustry(
        industryName: $industryName
        productName: $productName
        deal:$deal
    ) {
        ...IndustryFragment
    }
}
${INDUSTRY_FRAGMENT}
`

export default PRODUCT_LINK_INDUSTRY;