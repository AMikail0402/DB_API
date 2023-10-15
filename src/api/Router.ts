import * as services from './Controller';
const router = require("express").Router();


router.post("/", services.createEntry);
router.get("/",services.getEntries)
module.exports = router;