var express     = require("express"),
    bodyParser  = require("body-parser"),
    wordRoutes  = require("./routes/words"),
    app         = express(),
    port        = 3000,
    seedDB      = require("./seedDB"),
    mongoose    = require("mongoose")

const urlDB = "mongodb://localhost:27017/mywordsapp"
mongoose.connect(urlDB, { useNewUrlParser: true })
mongoose.set('useFindAndModify', false);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

seedDB()
app.use("/", wordRoutes);

app.listen(port, process.env.ID, function(){
    console.log(`The server is running on port ${port}`)
})