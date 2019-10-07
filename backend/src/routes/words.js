var express     = require("express"),
    router      = express.Router({mergeParams: true}),
    Word        = require("../models/word"),
    User        = require("../models/user")

router.get("/users", (req, res) => {
    User.find({},{_id: 1},(err, users) => {
        if(!err)
            res.send(users)
    })
})

router.get("/user/:idUser/words", (req, res) => {
    User.findById(req.params.idUser, {words: 1, _id: 0}).populate('words').exec((err, foundUser) => {
        if(err){
            res.json(err)
        }else{
            const { search, translate, meaning, qty } = req.query
            if(foundUser && foundUser.words){
                foundUser.words = foundUser.words.filter(e => {
                    return  (search ? e.word.includes(search) : true) &&
                        (translate ? ( e.translation ? e.translation.filter(ex => ex.includes(translate)).length !== 0 : false) : true) &&
                        (meaning ? ( e.meaning ? e.meaning.filter(m => m.includes(meaning)).length !== 0 : false) : true) &&
                        (qty ? ( e.examples != undefined ? e.examples.length === parseInt(qty) : false) : true)
                })
                res.json(foundUser.words)
            }else{
                res.send("something is wrong")
            }
        }
    })
})

router.post("/user/:idUser/words", (req, res) => {
    User.findById(req.params.idUser).populate('words').exec((err, foundUser) => {
        if(err){
            res.json(err)
        }else{
            Word.create(req.body, (err, createdWord) => {
                foundUser.words.push(createdWord);
                foundUser.save((err, user_s) => {
                    if(err) res.json(err)
                })
            })
        }
    })
})

router.put("/user/:idUser/words/:idWord", (req, res) => {
    Word.findOneAndUpdate(req.params.idWord, req.body, (err, updatedWord) => {
        if(err) res.json(err)
    })
})

router.delete("/user/:idUser/words/:idWord", (req, res) => {
    User.findById(req.params.idUser).populate('words').exec( (err, foundUser) => {
        if(err){
            res.json(err)
        }else{
            if(foundUser && foundUser.words){
                foundUser.words = foundUser.words.filter(w => w._id != req.params.idWord)
                foundUser.save()
            }
            Word.findByIdAndRemove(req.params.idWord);
        }
    })
})

module.exports = router
