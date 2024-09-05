let express = require("express");
let bodyParser = require("body-parser");
let dotenv = require("dotenv");
const cors = require('cors');

let OpenAI =require("openai");
//const { env } = require("process");


//Start the web framework express.js
const app = express();
app.use(cors());
app.use(bodyParser.json());

//Load the environment
dotenv.config();


//Create the api_end_point
app.get("/",async (req,res) => {
  let content = "I am the response from the API";
  res.send(content);
});

let port = process.env.PORT;
app.listen(port,()=> {
  console.log(`Server is running on port ${port}`);
});

//upload path
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/upload_files", upload.array("files"), uploadFiles);
function uploadFiles(req, res) {
    console.log(req.body);
    console.log(req.files);
    res.json({ message: "Successfully uploaded files" });
}




//OpenAI code
const openai = new OpenAI({
  apiKey: process.env.Open_AI_API_KEY,
});

async function call_openai() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-4o",
  });

  console.log(completion.choices[0]);
}

//Create the openai_api_end_point
app.get("/queryai",async (req,res) => {
  let content = await call_openai();
  res.send(content);
});

/*
app.listen(port,()=> {
  console.log(`Server is running on port ${port}`);
});
*/


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
