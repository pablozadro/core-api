# Lite-API


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


### Run development server

```bash
npm run serve:dev
```

