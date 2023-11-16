// ************ Requires ************
const express = require('express');
const methodOverride =  require('method-override'); 
const cors = require('cors');
const {CHARGE_PROCESS} = require('./processValues');
const {chargeData} = require('./chargeProcess');

const app = express();

// ************ Middlewares ************
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method')); 

// ************ Route System ************
const apiRouter = require('./routes/apiRouter'); 
app.use('/api/v1', apiRouter);

// ************ Server ************
app.listen(process.env.PORT || 3000, function() {
  console.log("Server running in port 3000");
  if (CHARGE_PROCESS=="true"){chargeData();}
})

