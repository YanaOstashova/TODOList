const { Task, Status, Identity } = require('../models');

const statuses = [
    new Status('New'),
    new Status('Working'),
    new Status('Complete'),
    new Status('Cancel'),
];

const tasks = [
    new Task('Title 1', null, null, statuses[0]),
    new Task('Title 2', null, null, statuses[1]),
    new Task('Title 3', null, null, statuses[2]),
];

const db = {
    getStatuses: (id) => {
        if (!id) return statuses;
        const items = statuses.filter(x => x.id === id);
        return items && items[0] ? items[0] : null;
    },

    getTasks: (id) => {
        if (!id) return tasks;
        const items = tasks.filter(x => x.id === id);
        return items && items[0] ? items[0] : null;
    },

    addTask: (item) => {
        item.id = Identity.ID++;
        tasks.push(item);
    },

    updateTask: (updatedItem) => {
        let item = tasks.filter(y => y.id === updatedItem.id)[0];
        if (item) {
            item.title = updatedItem.title;
            item.startDate = updatedItem.startDate;
            item.endDate = updatedItem.endDate;
            item.status = updatedItem.status;
        }
    },

    removeTask: (id) => {
        let item = tasks.filter(x => x.id === id)[0];
        if (item) {
            index = tasks.indexOf(item);
            tasks.splice(index, 1);
        }
    }
}

module.exports = db;