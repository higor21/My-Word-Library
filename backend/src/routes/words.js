var express     = require("express"),
    router      = express.Router({mergeParams: true}),
    Word        = require("../models/word")

router.get("/t", function(req, res){
    res.send("ok");
})

module.exports = router
