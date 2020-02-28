const mysql = require('mysql');
const mysqlConnect = mysql.createConnection({
    host:'localhost',
    database:'hackathon',
    user:'root',
    password:'',
    multipleStatements: true
}); 

mysqlConnect.connect((err)=>{
    if(!err){
        console.log('Connected');
    }
    else{
        console.log('Not connected');
    }
});


module.exports = mysqlConnect;