import {useState} from 'react'
import SearchResults from './SearchResults'
import TextField from '@mui/material/TextField';

const  Search = () => {
    const [nameSearchKeyword, setNameSearchKeyWord] = useState('')
    return (
        <>
            <TextField 
                label="Search By Name" 
                variant="outlined" 
                type="text" 
                id="search_by_name" 
                className='searchInput'
                value={nameSearchKeyword} 
                onChange={(e) => setNameSearchKeyWord(e.target.value)}/>

            <SearchResults keyWord={nameSearchKeyword}/>

        </>
    )
}

export default Search