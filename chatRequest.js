// import OpenAI from "openai";
const  {OpenAI} = require("openai");

const openai = new OpenAI();

async function chatCall(content) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content }],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0]
}


module.exports = {chatCall}
