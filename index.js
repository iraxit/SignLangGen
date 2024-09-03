let http = require ("http");
let app = require("./app");
let port = process.env.PORT || 5000;
let server = http.createServer(app)
server.listen(port,() => {
  console.log("Server is running on port ${port}")
});


//Sample node.js code
class Person {
  constructor(name, job) {
    this.name = name;
    this.job = job;
  }

  print() {
    const { name, job } = this;
    console.log(`${name}, ${job}`);
  }
}

const thatGuy = new Person('John Doe', 'Software Engineer');
thatGuy.print();


//https://www.youtube.com/watch?v=NLomlGhjlNM
