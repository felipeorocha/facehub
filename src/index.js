const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

mongoose.connect('mongodb+srv://frocha:kCKzM7kSG0URyajh@cluster0-3cdjc.mongodb.net/devhub?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

app.use(express.json());
app.use(routes);

app.listen(3000);
