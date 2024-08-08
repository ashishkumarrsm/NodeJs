const express = require("express");
const app = express();

const sendMessage=  (req, res) => {
    res.send("Hello bro");}
// get post put delete request

app.get("/", sendMessage);

app.get("/abc", (req, res) => {
  res.send("Hello bro you are in lolo");
});

app.listen(3000, () => {
  console.log("Server Start on port 3000");
})
