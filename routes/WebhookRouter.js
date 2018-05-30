const express = require('express');

const WebhookRouter = {
  init(req, res, next) {
    this.router = express.Router();
    this.router.get('/hello-world', this.helloWorldGet);
    this.router.post('/hello-world', this.helloWorldPost);
    return this.router;
  },
  helloWorldGet(req, res, next) {
    res.status(200).json({message: "Hello World!"});
    console.log('Hello World!');
  },
  helloWorldPost(req, res, next) {
    console.log(req.body);
    res.status(410).json({message: "Gone"});
    console.log('New hook!');
  },
}

module.exports = WebhookRouter.init();
