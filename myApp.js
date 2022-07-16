let express = require('express');
let app = express();
require('dotenv').config()
app.use(express.static(__dirname))

app.get('/' , (req,res) => {
  const absolutePath = __dirname + '/views/index.html';
  res.sendFile(absolutePath);
});

app.get('/json', (req, res) => {  
  let jsonResponse = {"message": "Hello Json"};
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    jsonResponse.message = jsonResponse.message.toUpperCase();
  }
  return res.json(jsonResponse);
});



































 module.exports = app;
