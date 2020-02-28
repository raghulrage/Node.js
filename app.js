const express = require('express');
const app = express();
const productsRoutes = require('./routes/products');
const ordersRoutes = require('./routes/orders');
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



app.use('/products',productsRoutes);
app.use('/orders',ordersRoutes);

app.use((req, rs , next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONs'){
        res.header('Access-control-Allow-Methods','PUT, POST, GET, DELETE');
        res.status(200).json({});
    }
});
app.use((req , res , next)=>{
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error , req , res , next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    });
})

module.exports =app;