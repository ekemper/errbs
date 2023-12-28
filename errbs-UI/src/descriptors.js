const descriptors = [
    "astringent",
    "acrid",
    "adrenal",
    "bitter",
    "cold",
    "complex",
    "complex temperature",
    "complicated internal energetics",
    "connective tissue",
    "cool",
    "CNS",
    "diaphoretic",
    "digestive",
    "diffusive",
    "dry",
    "endocrine",
    "gentle",
    "hot",
    "kidney",
    "mild",
    "moist",
    "neutral",
    "neutral temperature",
    "nervine",
    "nutritive",
    "pelvic",
    "pungent",
    "reproductive",
    "relaxant",
    "salty",
    "simulant",
    "sour",
    "stimulant",
    "sweet",
    "tonic",
    "trophorestorative",
    "urinary",
    "warm",
];

export default descriptors



// Below is the code that was used to generate this list :


// import errbs from './converted.js'

// const getItemsFromConvertedDocs = () => {
//     const rawItems = errbs.items.map(erb => {
//         return erb.vitalistActionsAndEnergetics
//     })

//     const parsedItems = rawItems
//         .map(rawItem => {
//             if (Array.isArray(rawItem)) {
//                 return rawItem

//             } else if (typeof rawItem === 'string' || rawItem instanceof String) {
//                 return rawItem.split(',').map(e => e.split(';'))

//             } else if (typeof rawItem === 'object' && rawItem !== null) {
//                 return Object.keys(rawItem).map(item => item.split(','))

//             } else {
//                 console.log(rawItem)
//                 throw new Error('dont know type of action item!')
//             }
//         })
//         .flat(2)
//         .map(str => str.trim())



//     const uniqueItems = [...new Set(parsedItems)];

//     return uniqueItems