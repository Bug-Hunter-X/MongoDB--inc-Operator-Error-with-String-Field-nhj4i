# MongoDB $inc Operator Error with String Field

This repository demonstrates a common error encountered when using the `$inc` operator in MongoDB update operations.  The `$inc` operator is used to increment a numeric field by a specified value, but attempting to use it with a string field will result in an error.

## Bug
The bug lies in the incorrect usage of the `$inc` operator with a string field.  The following code snippet attempts to increment the `age` field, which is a string, resulting in an error:

```javascript
// Incorrect usage of $inc operator with a string field
db.collection('myCollection').updateOne({name: 'John'}, {$inc: {age: '1'}});
```

## Solution
The solution is to ensure that the field being incremented is a numeric type (e.g., NumberInt, NumberLong, or a Double) before using the `$inc` operator. The `age` field should be of a numeric type to properly use the `$inc` operator. If the 'age' field was already a number, there may be other issues in the query or the database structure.