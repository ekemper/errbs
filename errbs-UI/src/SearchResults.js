

import errbs from './converted.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
console.log({ errbs })

const SearchResults = (nameSearchKeyword) => {

    console.log(nameSearchKeyword)


//     const searchString = keyWord.keyWord // wtf is happening here?

    
//     if (keyWord.length < 2) { return (<p>no search results</p>) }

//     const filteredErrbs = errbs.items.filter(erb => {
//         return erb.name.toLowerCase().includes(searchString.toLowerCase())
//     })

//     return filteredErrbs.map(erb => {
//         return (
//                 <div key={erb.name}>  <FontAwesomeIcon icon={faPlus} />  {erb.name}</div>
//         )
//     })



}


export default SearchResults