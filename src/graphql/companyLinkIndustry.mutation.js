import gql from "graphql-tag";
import INDUSTRY_FRAGMENT from './industry.fragment'

const COMPANY_LINK_INDUSTRY = gql`
mutation CompanyLinkIndustry(
    $companyNames: [String!]!
    $industryName: String!
) {
    companyLinkIndustry(
        companyNames: $companyNames
        industryName: $industryName
    ) {
        ...IndustryFragment
    }
}
${INDUSTRY_FRAGMENT}
`

export default COMPANY_LINK_INDUSTRY;