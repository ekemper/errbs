import { useState } from 'react'
import Grid from '@mui/material/Grid';
import SearchResults from './SearchResults'
import SearchByAction from './SearchByAction';
import TextField from '@mui/material/TextField';

const Search = () => {
    const [nameSearchKeyword, setNameSearchKeyWord] = useState('')
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <TextField
                        label="Search By Name"
                        variant="outlined"
                        type="text"
                        id="search_by_name"
                        className='searchInput'
                        value={nameSearchKeyword}
                        onChange={(e) => setNameSearchKeyWord(e.target.value)} />

                    <SearchByAction/>    

                </Grid>
                <Grid item xs={8}>
                    <SearchResults keyWord={nameSearchKeyword} />
                </Grid>
            </Grid>
        </>
    )
}

export default Search