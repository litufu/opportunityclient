import gql from "graphql-tag";
import COMPANY_FRAGMENT from './company.fragment'


const GET_COMPANIES_BY_CODE_OR_NAME = gql`
    query CompaniesByCodeOrName($inputvalue: String!) {
    companiesByCodeOrName(inputvalue: $inputvalue){
        ...CompanyFragment
    }
    }
    ${COMPANY_FRAGMENT}
`;

export default GET_COMPANIES_BY_CODE_OR_NAME;