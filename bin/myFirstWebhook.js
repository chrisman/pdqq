const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

const token = process.env.TRELLO_TOKEN;
const key = process.env.TRELLO_API_KEY;
const url = `https://api.trello.com/1/tokens/${token}/webhooks/`;

const active = true;
const callbackURL = "https://pdqq.herokuapp.com/webhooks/hello-world";
const description = "My first webhook";
const idModel = process.env.LIST_ID_TODO;

const body = JSON.stringify({
  active,
  callbackURL,
  description,
  idModel,
  key,
});

console.log(body);

fetch(url, { method: 'POST', body })
.then(res => {
  console.log(res);
  return res.json();
})
.then(json => console.log(json))
.catch(err => console.error(err))
