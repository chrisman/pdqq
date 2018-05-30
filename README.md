# PDQQ 🏃‍♂️

> Pretty Darn Quick Queue

## About

An expirement with adding functionality to Trello through webhooks and powerups.

## How To

1. 📝 Go to the [trello board][trello] and edit the _To Do_ list. (Add a card,
   delete a card, etc.)

3. 🎉 Look at the [heroku logs][heroku] and notice the webhook response.

## Structure

```
.
├── README.md
├── app.js
├── bin
│   └── myFirstWebhook.js
├── env.example
├── index.js
├── package.json
├── routes
│   └── WebhookRouter.js
├── webhooks
│   └── README.md
└── yarn.lock
```

* `index.js` - all server logic
* `app.js` - all express logic
* `routes/` - contains routes
* `webhooks/` - actual hooks to include in your routes.
* `bin/` - scripts to create/manage webhooks. WIP. currently all webhooks are
  being created via the [developer sandbox][sandbox].

## Development

1. `cp env.example ./.env`. Edit `.env`. Note: most of these values are for the
   scripts in `/bin`, which aren't working right now. You'll need them if you're
   going to try to create or edit webhooks outside of the [sandbox].

2. Install dependencies and run the dev server: `yarn && yarn run start`

## Deploy

WIP

1. git remote add heroku https://git.heroku.com/pdqq.git

2. yarn run deploy

[sandbox]: https://developers.trello.com/page/sandbox
[trello]: https://trello.com/b/fnpMT2iN/test
[heroku]: https://pdqq.herokuapp.com/
[github]: https://github.com/chrisman/pdqq
