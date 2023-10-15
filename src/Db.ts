const { Client }= require('pg');

const client = new Client({
    host: "localhost",
    user: "admin",
    port: "5432",
    password: "admin",
    database: "datenbank"
})

module.exports = {
    query: (data, callBack) => {
        const name: string = "'"+data.name+"'";
        const adress: string = "'"+data.adress+"'";
        const gender: string = "'"+data.gender+"'";
     
        console.log("Name"+name+"\nAdresse"+adress+"\nGeschlecht"+gender) 
        console.log("SQL-Befehl: "+'insert into example_table (name, adress, gender) values ('+name+','+adress+','+gender+')')
    client.query('insert into example_table (name, adress, gender) values ('+name+','+adress+','+gender+')',
    (err, res) =>{
        if(!err){
            console.log(res.rows);
            return callBack(null,"Entry was succesfully added");
        }
        else{
            console.log(err.message+"Das ist die Error-Nachricht");
            return callBack(err);
        }
        client.end;
        });
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