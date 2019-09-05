import gql from "graphql-tag";
import PRODUCT_FRAGMENT from './product.fragment'

const CREATE_PRODUCT = gql`
mutation CreateProduct(
    $name: String!
    $introduce: String!
) {
    createProduct(
        name: $name
        introduce: $introduce
    ) {
        ...ProductFragment
    }
}
${PRODUCT_FRAGMENT}
`

export default CREATE_PRODUCT;