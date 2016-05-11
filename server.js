var http = require ('http');
var url = require('url');

function start(route){
  function onRequrest(request,response){
    var pathname = url.parse(request.url).pathname;
    console.log('Request for '+ pathname + ' received.' );
    route(pathname);
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World');
    response.end();
  }
  http.createServer(onRequrest).listen(8888);
  console.log('Server has started.');
}
exports.start = start;
// var http = requrie('http');
// var server = http.createServer();
// server.listen(8888);

// function say(word){
//   console.log(word);
// }
//
// function execute(someFunction, value){
//   someFunction(value);
// }
// execute(say, 'Hello');
//
// function execute(someFunction, value){
//   someFunction(value);
// }
// execute(function(word){ console.log(word);},'Hello');
//
// var result = database.query('SELECT * FROM hugetable', function(rows){
//   var result = rows;
// });
// console.log('Hello World');
