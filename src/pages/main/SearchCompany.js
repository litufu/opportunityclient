import React,{Fragment} from 'react'
import { useLazyQuery } from '@apollo/react-hooks';
import SearchBar from '../../components/SearchBar'
import Loading from '../../components/Loading'
import CompanyTable from '../../components/CompanyTable'
import GET_COMPANIES from '../../graphql/get_companies.query';


export default function SearchCompany(){
    const [searchText, setSearchText] = React.useState("");
    const [companies, { loading,error, data }] = useLazyQuery(GET_COMPANIES);
    
    if (loading) return <Loading />;
    if (error) return <div>{error.message}</div>;

    return(
        <Fragment>
            <SearchBar 
              placeholder="根据关键词查找相关公司"
              inputValue={searchText}
              handleInputValue={(event)=>setSearchText(event.target.value)}
              search={()=>companies({ variables: { keyword:searchText } })}
            />
            {(data && data.companies) && (
                <CompanyTable 
                    companies={data.companies}
                />)
            }
        </Fragment>
    )
}