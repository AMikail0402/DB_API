import * as services from './Controller';

const Router = require("express").Router();
const cleaningRouter = require("express").Router();
const dashboardRouter = require("express").Router();

dashboardRouter.get("/",services.getEntries)
cleaningRouter.delete("/", services.deleteEntries);
Router.post("/", services.createEntry);
Router.get("/",services.getEntries);

export {Router, cleaningRouter, dashboardRouter}