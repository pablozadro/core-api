# Docs


## Status

```
200 OK
201 Created
204 No Content
400 Bad Request
401 Unauthenticated
403 Forbidden
404 Not Found
500 Internal Server Error
503 Service Unavailable
```


## Mongoose

ASC > 1
DESC > -1

return NutritionItemModel
  .find({ category})
  .select(['title'])
  .sort({'title': this.DEFAULT_SORT})
  .limit(this.DEFAULT_LIMIT);



## Queries

```
/nutrition/items?category=6814f5240df72283c45030f4&orderBy=title&orderDir=1
```