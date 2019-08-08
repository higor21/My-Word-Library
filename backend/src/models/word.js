var mongoose    = require("mongoose")

var wordSchema = new mongoose.Schema({
    word: String,
    translation: String,
    meaning: String, 
    examples: []
})

module.exports = mongoose.model("Word", wordSchema);