let express = require("express");
let bodyParser = require("body-parser");
let dotenv = require("dotenv");
let OpenAI =require("openai");
const { env } = require("process");

//Load the environment
dotenv.config();


//Create the api_end_point
const app = express();
app.use(bodyParser.json())
app.get("/",async (req,res) => {
  let content = await main();
  res.send(content);
});

let port = process.env.PORT || 3000;
app.listen(port,()=> {
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
