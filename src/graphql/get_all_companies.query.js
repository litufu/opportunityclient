import gql from "graphql-tag";
import COMPANY_FRAGMENT from './company.fragment'

const GET_ALL_COMPANIES = gql`
    query AllCompanies{
        allCompanies{
          ...CompanyFragment
        }
    }
    ${COMPANY_FRAGMENT}
`

export default GET_ALL_COMPANIES;