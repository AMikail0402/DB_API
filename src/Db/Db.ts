const { Client }= require('pg');

const client = new Client({
    host: "localhost",
    user: "admin",
    port: "5432",
    password: "admin",
    database: "datenbank"
})

   
    function query(query,callBack){

         client.query(query,(err,res) => {
            if(!err){
                console.log("Ergebnis in db.ts"+JSON.stringify(res.rows))
                return callBack(null, "Successful Operation")
            }
            else{
                return callBack(err, "Operation not permitted");
            }
         })
         
    }

    client.connect();


export{query,client}