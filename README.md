# Core-API


## Getting Started

### Install dependencies

```bash
npm install
```

### Setup environment

Copy `.env.example` into new file `.env` and fill the data.

Run `npm run scripts:generate-random-str` to generate random strings for:
`AUTH_PASSWORD_PEPPER` and `AUTH_JWT_SIGN_SECRET`.


### Run MongoDB service

```bash
mongod
```


------------------------------------------------------------------------------------------------------------------------


## Run development server

```bash
npm start
npm run serve:dev
```

## Lint & Test

```bash
npm run lint
npm run test
```


## Backup

Dump DB on `backup` dir:

```bash
npm run backup:dump
```

Reestablecer DB local:

```bash
npm run backup:restore
```


