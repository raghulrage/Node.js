const express = require('express');
const mysqlConnection = require('../connection');
const router = express.Router();

router.get('/:email',(req,res,next)=>{
    mysqlConnection.query('SELECT * FROM login WHERE email = ?',[req.params.email],(err,rows,fields)=>{
        if(!err){
            res.send(rows).status(200);
            // res.status(200).json({
            //     message:'Handling GET request to /products'
            // })
        }
        else{
            console.log(err);
        }
    });
    
}); 

router.post('/',(req,res,next)=>{
    const data = req.body;
    var sql = 'INSERT into login (fullname , email , password) VALUES(?, ?, ?)'; 
    mysqlConnection.query(sql,[data.fullname,data.email,data.password],(err, rows,fiels)=>{
        if(!err){
                res.send('Inserted data');                
        }
        else{
            console.log(err);
        }
    })
});


router.delete('/:id',(req,res,next)=>{
    mysqlConnection.query('DELETE FROM login WHERE id=?',[req.params.id],(err,rows,fields)=>{
        if(!err){
            res.send('Deleted!!');
        }else{
            console.log(err);
        }
    })
})
module.exports = router;