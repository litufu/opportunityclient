import React,{Fragment} from 'react'
import { useLazyQuery } from '@apollo/react-hooks';
import SearchBar from '../../components/SearchBar'
import Loading from '../../components/Loading'
import CompanyTable from '../../components/CompanyTable'
import GET_COMPANIES_BY_CODE_OR_NAME from '../../graphql/get_companies_by_code_or_name.query'


export default function SearchCompany(){
    const [searchText, setSearchText] = React.useState("");
    const [companiesByCodeOrName, { loading,error, data }] = useLazyQuery(GET_COMPANIES_BY_CODE_OR_NAME);
    
    if (loading) return <Loading />;
    if (error) return <div>{error.message}</div>;

    return(
        <Fragment>
            <SearchBar 
              placeholder="根据关键词查找相关公司"
              inputValue={searchText}
              handleInputValue={(event)=>setSearchText(event.target.value)}
              search={()=>companiesByCodeOrName({ variables: { inputvalue:searchText } })}
            />
            {(data && data.companiesByCodeOrName) && (
                <CompanyTable 
                    companies={data.companiesByCodeOrName}
                />)
            }
        </Fragment>
    )
}