const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express()
const port = 3000
const { Configuration, OpenAIApi } = require("openai");
app.use(bodyParser.json());
app.use(cors());

let answer = ""

app.post('/chat', async(req, res) => {
    
    let content = req.body.message;
    // console.log(content);
    const configuration = new Configuration({
    // apiKey: process.env.OPENAI_API_KEY,
<<<<<<< HEAD
    apiKey: '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',
=======
    apiKey: '',
>>>>>>> c068710956e202c72ce7dbd80cd5d4d279c5aeae
    });
    const openai = new OpenAIApi(configuration);

    const chatCompletion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: JSON.stringify(content)}],

});

console.log(chatCompletion.data.choices[0].message.content);
answer = chatCompletion.data.choices[0].message.content;
res.json({answer: answer});
})

// app.get('/chat', (req, res) => {
//   res.json({answer: answer});
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
