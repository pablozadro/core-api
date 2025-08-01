# Core-API


## Getting Started

### Install dependencies

```bash
npm install
```

### Setup environment

Copy `.env.example` into new file `.env` and fill the data.

Run `npm run auth:random` to generate random strings for `AUTH_PASSWORD_PEPPER` and `AUTH_JWT_SIGN_SECRET`.


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
