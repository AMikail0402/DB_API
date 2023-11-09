import {create } from './Services';
import { client } from '../Db';

    function createEntry(req,res){
            const body = req.body;
            console.log("body"+body);
            create(body, (err,results) => {
                if(err){
                    console.log("Error1"+err);
                    return res.status(500).json({success:0,
                    message: "Database connection error"})
                }
                if(!err){
                    console.log("Error2"+err);
                    return res.status(200).json({success:1,
                    message: "Operation permitted"})
                }
                
            })
        }
     function getEntries(req,res){
        let list = null;
        client.query('Select * from example_table', (err, results) =>{
                if(!err){
                    list = results.rows;
                    console.log(list);
                    return res.status(200).json({success:1,
                        message: "Operation permitted",
                        list}) 
                }
                else{
                    console.log("Error1"+err);
                    return res.status(500).json({success:0,
                    message: "Database connection error"})

                }
                
        });
       
    }

        export {createEntry,getEntries}
    
