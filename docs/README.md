# Core-API / Docs

```json
{
  "message": "Some Message",
  "payload": {},
  "error": null,
}
```

```json
{
  "message": "Some Message",
  "payload": null,
  "error": {
    "code": 404,
    "message": "Resource Not Found",
    "cause": {}
  },
}
```

```javascript
const createError = require('http-errors');
next(createError(404, 'Resource Not Found', { cause: {} });)
```

Client Errors
- 400: Bad Request