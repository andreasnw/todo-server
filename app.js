if(process.env.NODE_ENV == 'development') {
    require('dotenv').config()    
};
const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes/index.js');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, ()=> console.log(`listening to port: ${process.env.PORT}`));