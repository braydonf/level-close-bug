var levelup = require('levelup');
var db = levelup('./test.db');

db.batch([{
  type: 'put', 
  key: 'foobaz',
  value: 'barbaz'
}], {sync: true}, function (err) {
  console.log('db: back from put', err);
});
  
db.close(function (err) {
  console.log('db: closed the db', err);
});


