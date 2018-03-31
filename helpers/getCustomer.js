const storage = require('./customers');


module.exports = (req,res) => {
 const {id} = req.params;
 const idNum = parseInt(id);

 const {customers} = storage;

 const customer = customers.find((cust) => {return cust.id == idNum});
 if(!customer){
     res.statusCode = 404;
     return res.end();
 }

 res.setHeader('content-type','application/json');
 res.end(JSON.stringify(customer));

};