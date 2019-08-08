var express     = require("express"),
    bodyParser  = require("body-parser"),
    wordRoutes  = require("./routes/words"),
    app         = express()


app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
    res.send("Hello World!")
});

app.use("/words", wordRoutes);

app.listen(3000, process.env.ID, function(){
    console.log(`The server is running on port ${process.env.PORT}`)
})