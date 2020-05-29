const express = require("express");
const path = require('path');
const config = require("config");
const mongoose = require("mongoose");

const app = express();

app.use(express.json({ extended: true }));
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/car", require("./routes/adm.routes"));
app.use("/api/client", require("./routes/client.routes"));
app.use("/api/client/service", require("./routes/service.routes"));
app.use("/api/client/question", require("./routes/questions.routes"));
app.use("/api/client/td", require("./routes/td.routes"));
app.use("/api/client/buy", require("./routes/buy.routes"));
app.use(express.static(path.join(__dirname, 'build')));

const PORT = config.get("port") || 5000;

async function start() {
  try {
    await mongoose.connect(config.get("mongoURI"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () => console.log(`app started on port ${PORT}`));

    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
  } catch (e) {
    console.log("Server error", e.message);
    process.exit(1);
  }
}

start();
