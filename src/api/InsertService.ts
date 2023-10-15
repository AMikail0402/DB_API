const pool = require("../db")


   function create(data, callBack){
        console.log(data);
        const name: string = "'"+data.name+"'";
        const adress: string = "'"+data.adress+"'";
        const gender: string = "'"+data.gender+"'";
        console.log("Name"+name+"\nAdresse"+adress+"\nGeschlecht"+gender) 
        console.log("SQL-Befehl: "+'insert into example_table (name, adress, gender) values ('+name+','+adress+','+gender+')')
        const query: string = 'insert into example_table (name, adress, gender) values ('+name+','+adress+','+gender+')';
        pool.query(query, callBack);
        
    } 
    
    export{create};
