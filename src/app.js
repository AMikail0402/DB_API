var express = require('express');
var app = express();
var userRouter = require("./api/Router");
app.use(express.json());
app.use("/api/users", userRouter);
app.get("/api", function (req, res) {
    res.json({
        success: 1,
        message: "This rest api is working"
    });
});
app.listen(3000, function () {
    console.log("Server up and running");
});
