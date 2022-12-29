
const { Configuration, OpenAIApi } = require("openai");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const configuration = new Configuration({
    organization: "org-K7SVZEhqHMLbbNASpuqHurVM",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Create an express api that interacts with OpenAI
const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 3080;

app.post('/', async (req, res) => {
  var message = 'Give me 5 specific actionable steps for how I should achieve the following goal and separate each with a line break: I want to ' +  req.body.input;
  
  // Get OpenAI Response
  const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: message,
  max_tokens: 200,
  temperature: 0.5,
  });

  // Return OpenAI response as result 
  console.log(message);
  console.log(response.data.choices[0].text);
  res.json({
    message: response.data.choices[0].text
    // message: message
  })

});

app.listen(port, () => {
  console.log('Listening on localhost 3080')
});
