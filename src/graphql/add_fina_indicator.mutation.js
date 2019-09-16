import gql from "graphql-tag";

const ADD_FINA_INDICATOR = gql`
mutation AddFinaIndicator(
    $code: String!
) {
    addFinaIndicator(
        code: $code
    ) 
}
`

export default ADD_FINA_INDICATOR;