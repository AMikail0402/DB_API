const { create } = require("./InsertService");

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        console.log(body);
        create(body, (err,results) => {
            if(err){
                console.log(err)
                return res.status(500).json({
                    success: 0,
                    message: "Database connection  error"
                })
            }
            return res.status(200).json({
                success: 1,
                data: results
            })
        })
    }
}