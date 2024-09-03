let http = require ("http");
let app = require("./app");
let port = process.env.PORT || 5000;
let server = http.createServer(app)
server.listen(port,() => {
  console.log("Server is running on port ${port}")
});


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



//OpenAI code
const openai = new OpenAI({
  apiKey: process.env[Open_AI_API_KEY],
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-4o",
  });

  console.log(completion.choices[0]);
}



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
