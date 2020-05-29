const express = require("express");
//const path = require('path');
const config = require("config");
const mongoose = require("mongoose");

const app = express();

app.use(express.json({ extended: true }));
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/car", require("./routes/adm.routes"));
app.use("/api/client", require("./routes/client.routes"));
app.use("/api/service", require("./routes/service.routes"));
app.use("/api/question", require("./routes/questions.routes"));
app.use("/api/td", require("./routes/td.routes"));
app.use("/api/buy", require("./routes/buy.routes"));

//for heroku
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

const PORT = process.env.PORT || 8080;
//////
//const PORT = config.get('port') || 5000;

async function start() {
  try {
    await mongoose.connect(config.get("mongoURI"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    

    // app.get('/*', (req, res) => {
    //   res.sendFile(path.join(__dirname, 'build', 'index.html'));
    // });

    app.listen(PORT, () => console.log(`app started on port ${PORT}`));

  } catch (e) {
    console.log("Server error", e.message);
    process.exit(1);
  }
}

start();
