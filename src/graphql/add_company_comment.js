import gql from "graphql-tag";
import COMMENT_FRAGMENT from './comment.fragment'

const ADD_COMPANY_COMMENT = gql`
mutation AddCompanyComment(
    $companyName: String!
    $comment: String!
) {
    addCompanyComment(
        companyName: $companyName
        comment: $comment
    ) {
        ...CommentFragment
    }
}
${COMMENT_FRAGMENT}
`

export default ADD_COMPANY_COMMENT;