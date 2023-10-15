const pool = require("../db")

module.exports = {
    create: (data, callBack) => {
        console.log(data);
        pool.query(data, callBack);
        
    } 
    
}