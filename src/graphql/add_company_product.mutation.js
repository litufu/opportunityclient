import gql from "graphql-tag";
import COMPANY_PRODUCT_FRAGMENT from './company_product.fragment'

const ADD_COMPANY_PRODUCT = gql`
mutation CreateCompanyProduct(
    $name: String!
    $introduce: String!
) {
    createCompanyProduct(
        name: $name
        introduce: $introduce
    ) {
        ...CompanyProductFragment
    }
}
${COMPANY_PRODUCT_FRAGMENT}
`

export default ADD_COMPANY_PRODUCT;