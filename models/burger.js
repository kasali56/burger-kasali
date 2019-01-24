var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        // console.log(`${burger_name}\n${cb}`);
        orm.create(cols, vals, function (res) {
            cb(res);
        })
    },
    update: function(objColVals, condition, cb) {
        orm.update(objColVals, condition, function (res) {
            cb(res);
        });
    }
}

module.exports = burger;