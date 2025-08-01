# Request & Response


## Response

Successfull Response

```json
{
  "msg": "[Feature] Generic friendly message",
  "payload": {},
  "error": null
}
```

Successfull Status Codes

```
200 OK
201 Created
204 No Content
```


Error Response

```json
{
  "msg": "[Feature] Generic friendly message",
  "payload": null,
  "error": {
    "msg": "Error message",
    "status": 400,
    "cause": {}
  }
}
```

Error Status Codes

```
400 Bad Request
401 Unauthenticated
403 Forbidden
404 Not Found
500 Internal Server Error
503 Service Unavailable
```

How to create errors:

```typescript
import createError from 'http-errors';

throw createError(400, 'User Not Found', { cause: {}});
```