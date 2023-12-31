import { client }  from '../Db/Db';


   function create(data, callBack){
        console.log("Daten"+data);
        const cve: string = "'"+data.cve+"'";
        const msg: string = "'"+data.msg+"'";
        const time: string = "'"+data.time+"'";
        const src_address: string = "'"+data.src_address.replace("\/","")+"'";
        console.log("CVE"+cve+"\nNachricht"+msg+"\nZeit"+time) 
        console.log("SQL-Befehl: "+'insert into example_table (cve, msg, time, src_address) values ('+cve+','+msg+','+time+','+src_address+')');
        const query: string = 'insert into example_table (cve, msg, time, src_address) values ('+cve+','+msg+','+time+','+src_address+')';
        client.query(query, callBack);
        
    } 

    export{create};