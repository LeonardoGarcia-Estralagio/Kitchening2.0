var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res) => res.render("index", { 
  title: "kitchening2.0",
  comision: 20,
  horario: "19 a 21 hs" 
}));

module.exports = router;
