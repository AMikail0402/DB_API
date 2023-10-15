import * as services from './InsertService';

    function createEntry(req,res){
            const body = req.body;
            console.log(body);
            services.create(body, (err,results) => {
                if(err){
                    console.log(err);
                    return res.status(500).json({success:0,
                    message: "Database connection error"})
                }
                if(!err){
                    console.log(err);
                    return res.status(200).json({success:1,
                    message: "Operation permitted"})
                }
                
            })
        }
        

        export {createEntry}
    
