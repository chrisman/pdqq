const bodyparser = require('body-parser');
const express = require('express');

const WebhookRouter = require('./routes/WebhookRouter');

const createApp = {
  init() {
    this.app = express();
    this.middleware();
    this.routes();

    return this.app;
  },
  middleware() {
    this.app.use(bodyparser.json());
    this.app.use(bodyparser.urlencoded({ extended: false }));
  },
  routes() {
    let router = express.Router();
    router.get('/', (req, res, next) => {
      res.json({
        message: 'Hello'
      })
    })
    this.app.use('/', router);
    this.app.use('/webhooks/', WebhookRouter);
  }
};

module.exports = createApp.init();
