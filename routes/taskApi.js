const { MainDTO } = require("../models");
const bd = require("../dal/storage");

exports.get = (request, response) => {
    const id = +request.params.id;
    const item = bd.getTasks(id);

    if (item) {
        const model = new MainDTO("TODO LIST", bd.getTasks(), bd.getStatuses(), item);
        return response.render("main", model);
    }

    response.redirect('/');
};

exports.add = (request, response) => {
    const item = request.body;

    item.status = bd.getStatuses(+item.status);
    bd.addTask(item);

    response.redirect('/');
};

exports.update = (request, response) => {
    const item = request.body;

    item.id = +item.id;
    item.status = bd.getStatuses(+item.status);

    bd.updateTask(item);

    response.redirect('/');
};

exports.delete = (request, response) => {
    const id = +request.params.id;
    bd.removeTask(id);
    response.redirect('/');
};