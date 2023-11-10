import * as services from './Controller';
const Router = require("express").Router();

Router.post("/", services.createEntry);
Router.get("/",services.getEntries)

export {Router}