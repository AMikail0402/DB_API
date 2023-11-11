import * as services from './Controller';

const Router = require("express").Router();
const cleaningRouter = require("express").Router();

cleaningRouter.delete("/", services.deleteEntries);
Router.post("/", services.createEntry);
Router.get("/",services.getEntries);

export {Router, cleaningRouter}