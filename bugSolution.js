```javascript
// Correct usage of $inc operator with a numeric field
db.collection('myCollection').updateOne({name: 'John'}, {$inc: {age: 1}});
// Or, if 'age' needs to be cast from a String:
db.collection('myCollection').updateMany({name: 'John'}, [{$set:{age: parseInt(age)}}]);
db.collection('myCollection').updateOne({name: 'John'}, {$inc: {age: 1}});
```