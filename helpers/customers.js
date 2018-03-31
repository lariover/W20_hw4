
const customers = [
    {
        id: 1,
        name: 'Jan',
        surname: 'Novak',
        dateOfBirth: '1.1.1990',
        address: 'Prague'

    },
    {
        id: 2,
        name: 'Martin',
        surname: 'Zajic',
        dateOfBirth: '1.1.1990',
        address: 'Prague'

    },
    {
        id: 3,
        name: 'Roman',
        surname: 'Vesely',
        dateOfBirth: '1.1.1986',
        address: 'Prague'

    },
    {
        id: 4,
        name: 'Michal',
        surname: 'Rath',
        dateOfBirth: '1.1.1991',
        address: 'Prague'

    },
    {
        id: 5,
        name: 'Jan',
        surname: 'David',
        dateOfBirth: '1.1.1985',
        address: 'Prague'

    }

];

const tasks = [];

let idCounter = 6;
let taskID = 1;

module.exports = {customers, idCounter,tasks,taskID};