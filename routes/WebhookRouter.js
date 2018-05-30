const express = require('express');

const WebhookRouter = {
  init(req, res, next) {
    this.router = express.Router();
    this.router.get('/hello-world', this.helloWorld);
    return this.router;
  },
  helloWorld(req, res, next) {
    res.json({ message: 'Success'});
    console.log('Hello World!');
  },
}

module.exports = WebhookRouter.init();
