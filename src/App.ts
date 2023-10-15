const  express   = require('express');
const app = express();
const userRouter = require("./api/Router")

app.use(express.json());

app.use("/api/users", userRouter);

app.get("/api", (req, res) => {

    res.json({
        success: 1,
        message: "This rest api is working"
    })

})

app.listen(3000, () => {
    console.log("Server up and running");
})

