const { chatCall } = require("./chatRequest.js");
const { writeFileSync, readdirSync, readFileSync } = require('fs');
const keys = require('./schema.js')

const dir = './herbTexts/';

const docs = []

const convert = async text => {

    const promptAsk =`
        using the following keys : ${keys.join(',')} ,

        please convert the following document into json : ${text}
    `

    try {
        const resp = await chatCall(promptAsk)

        let doc
        try {
            doc = JSON.parse(resp.message.content)
        } catch (parseError) {
            console.log({responseContent: resp.message.content})
            throw new Error( 'error parsing json :')
        }
        
        docs.push(doc)
        console.log(`success`);
    } catch (error) {
        console.log('An error has occurred ', error);
    }
}

const getJsonFromTxtFile =  async file => {
    try {
        const text = readFileSync(`${dir}${file}`, 'utf8')
        await convert(text)
    } catch (err) {
        console.error(err);
        return;
    }
}

(async function () {
    const files = readdirSync(dir)

    await Promise.all(files.map(async (file) => {
        await getJsonFromTxtFile(file)
    }));
    
    writeFileSync('./converted.json', JSON.stringify(docs))
})()
