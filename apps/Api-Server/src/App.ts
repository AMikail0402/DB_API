const  express   = require('express');
import { Router}  from './api/Router';
import { cleaningRouter }  from './api/Router';

const app = express();


app.use(express.json());

app.use("/api/users", Router);



app.use("/clean",cleaningRouter)

app.get("/api", (req, res) => {

    res.json({
        success: 1,
        message: "This rest api is working"
    })

})

app.listen(3000, () => {
    console.log("Server up and running");
})

