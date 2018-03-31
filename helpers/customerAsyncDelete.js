const stoarage = require('./customers');


module.exports = (req, res) => {
    const {id} = req.params;
    const idNum = parseInt(id);

    const {customers,tasks} = stoarage;
    const customer = customers.find((cust) => {
        return cust.id == idNum
    });
    if (!customer) { //there is no customer with such an id
        res.statusCode = 404;
        return res.end('{}');
    }
    const taskId = stoarage.taskID;
    const task = {
        id: taskId,
        customer: idNum,
        status: 'delete accepted'
    };
    tasks.push(task);
    customer.status = 'delete_requested';
    stoarage.taskID++;
    res.setHeader('Location', `/tasks/${taskId}`);
    res.statusCode = 202;
    res.end(JSON.stringify({status: 'delete accepted', message: 'Your delete request was accepted'}));
};