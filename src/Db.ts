const { Client }= require('pg');

const client = new Client({
    host: "localhost",
    user: "admin",
    port: "5432",
    password: "admin",
    database: "datenbank"
})

module.exports = {
    query: (query,callBack) => {
         client.query(query,(err,res) => {
            if(!err){
                return callBack(null, "Successful Operation")
            }
            else{
                return callBack(err, "Operation not permitted");
            }
            client.end()
         })
    }
}

client.connect();

client.query('Select * from example_table', (err, res) =>{
if(!err){
    console.log(res.rows);
}
else{
    console.log(err.message);
}
client.end;
});