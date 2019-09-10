import gql from 'graphql-tag';

const COMMENT_FRAGMENT = gql`
  fragment CommentFragment on Comment {
    id
    desc
    createTime
 }
 
 
`
export default COMMENT_FRAGMENT;