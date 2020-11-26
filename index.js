const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = config.get("port") || 8082;

app.use("/api/auth", require("./routes/auth.routes"));

async function start() {
  try {
    await mongoose.connect(
      config.get("MongoUri"),
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
      },
      () =>
        console.log(`[server] Successfully connected to the database cluster`)
    );

    app.listen(PORT, () =>
      console.log(`[server] Server is up and running on port:${PORT}`)
    );
  } catch (e) {
    console.log("[server] Something went wrong", e.message);
    process.exit(-1);
  }
}

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "public", "index.html"));
});

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
//   });
// }

start();
