// import chatCall from "./chatRequest.js";
const { join } = require("path");
const { chatCall } = require("./chatRequest.js");
const { writeFileSync, readdirSync } = require('fs');

const dir = './herbTexts/';

readdirSync(dir).forEach(file => {
    // console.log(file);
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        convert(data);
      });
});

function convert() {

   


    chatCall(`please convert the following document into json : ${text}`).then((resp) => {

        // console.log({resp})

        const path = './convertedText.json';

        const jsonMessage = resp.message.content
        try {
            writeFileSync(path, jsonMessage, 'utf8');
            console.log('Data successfully saved to disk');
        } catch (error) {
            console.log('An error has occurred ', error);
        }
    })
}

