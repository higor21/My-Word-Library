var express     = require("express"),
    bodyParser  = require("body-parser"),
    wordRoutes  = require("./routes/words"),
    app         = express(),
    port        = 3000,
    seedDB      = require("./seedDB"),
    mongoose    = require("mongoose")

const urlDB = "mongodb://localhost:27017/mywordsapp"
mongoose.connect(urlDB, { useNewUrlParser: true })

app.use(bodyParser.urlencoded({extended: true}));

seedDB()
app.use("/", wordRoutes);

app.listen(port, process.env.ID, function(){
    console.log(`The server is running on port ${port}`)
})