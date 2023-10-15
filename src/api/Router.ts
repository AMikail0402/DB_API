import * as services from './Controller';
const router = require("express").Router();


router.post("/", services.createEntry);

module.exports = router;