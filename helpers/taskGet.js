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

    if (task.status != 'deleted') {
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify(task));
    } else {
        res.statusCode = 204;
        return res.end();
    }

};