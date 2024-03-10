const express = require('express');
const app = express();
const keyRouter = require("./src/routes/keyRouter")
app.use(express.json());

app.use("/api/v1/key", keyRouter);

app.get("/", (req,res) =>{
    res.send("ola")
})


module.exports = app;