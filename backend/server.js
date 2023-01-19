const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const server = require('http').createServer(app);
const WebSocket = require('ws');


//Web Sockets 
const wss = new WebSocket.Server({ server:server });

wss.on('connection', function connection(ws) {
  console.log('A WebSockets Connected!');
  ws.send('Welcome Client!');

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);

    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
    
  });
}); 

const Department = require("./routes/departments");
const Employee = require("./routes/employee");
const Financial = require("./routes/financial");
const Project = require("./routes/projects");


// Body parser middleware
app.use(bodyParser.json());
app.use(cors());

app.use(
  express.urlencoded({
    extended: false,
  })
);
//route middleware
app.use(Employee);
app.use(Department);
app.use(Financial);
app.use(Project);



app.use(express.json());
// DB Config
const db = config.get("mongoURI");
// Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
