const storage = require('./customers');


module.exports = (req, res) => {
    const {id} = req.params || {};
    const {tasks} = storage;
    const idNum = parseInt(id);

    const task = tasks.find((t) => t.id == idNum);
    if (!task) {
        res.statusCode == 404;
        return res.end();
    }

    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify(task));


};