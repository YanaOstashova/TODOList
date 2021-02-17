const {
    Identity
} = require("./");

exports.Status = class Status {
    construcor(name) {
        this.id = Identity.ID++;
        this.name = name;
    }
}