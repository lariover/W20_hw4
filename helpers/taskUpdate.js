const storage = require('./customers');


module.exports = (req,res) => {
    const {status} = req.body || {};
    const {id} = req.params;
    const idNum = parseInt(id);
    const {tasks,customers} = storage;

    const task = tasks.find((t)=> t.id == idNum);
    if(!task){
        res.statusCode = 404;
        return res.end();
    }
    if(!status){
        res.statusCode = 400;
        return res.end();
    }
    task.status = status;
    if(status === 'deleted'){

        //const customer = customers.find((c)=> c.id == task.customer);
        storage.customers = customers.filter((c) => c.id != task.customer);
    }
    res.statusCode = 204;
    res.end();

};