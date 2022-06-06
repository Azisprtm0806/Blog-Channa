const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const port = 3004;
dotenv.config();

const adminRoute = require("./routes/admin");

const app = express();
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(adminRoute);

mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`App listen on port http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
