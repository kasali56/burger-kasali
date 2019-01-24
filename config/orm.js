var connection = require("../config/connection.js");

function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
          
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}


var orm = {
    selectAll: function (cb) {
        connection.query("SELECT * FROM burgers;", function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    create: function (cols, vals, cb) {
        var queryString = `INSERT INTO burgers (${cols.toString()}) VALUES (?)`;
        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    update: function (objColVals, condition, cb) {
        var queryString = "UPDATE burgers SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;

