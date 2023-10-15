const { createUser} = require("./Controller");
const router = require("express").Router();


router.post("/", createUser);

module.exports = router;