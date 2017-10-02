const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req,res)=> {
    res.sendfile("index.html");
});
console.log(__dirname);

app.listen(3000 || process.env.PORT, ()=> {
    console.log("connected at port", 3000 || process.env.PORT);
});