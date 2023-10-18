const pool = require("../db")


   function create(data, callBack){
        console.log("Daten"+data);
        const cve: string = "'"+data.cve+"'";
        const msg: string = "'"+data.msg+"'";
        const time: string = "'"+data.time+"'";
        console.log("CVE"+cve+"\nNachricht"+msg+"\nZeit"+time) 
        console.log("SQL-Befehl: "+'insert into example_table (name, adress, gender) values ('+cve+','+msg+','+time+')')
        const query: string = 'insert into example_table (cve, msg, time) values ('+cve+','+msg+','+time+')';
        pool.query(query, callBack);
        
    } 

    
    export{create};