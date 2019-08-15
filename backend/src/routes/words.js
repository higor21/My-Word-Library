var express     = require("express"),
    router      = express.Router({mergeParams: true}),
    Word        = require("../models/word"),
    User        = require("../models/user")

router.get("/user/:idUser/words", (req, res) => {
    User.findById(req.params.idUser).populate('words').exec((err, foundUser) => {
        if(err){
            res.json(err)
        }else{
            const search = req.query.search
            if(search && foundUser && foundUser.words){
                foundUser.words = foundUser.words.filter(e => { return e.word.includes(search) })
                res.json(foundUser.words)
            }else {
                res.send("error!")
            }
        }
    })
})


module.exports = router
