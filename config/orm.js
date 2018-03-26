var connection = require('./connection.js');

function objToSql(ob) {
    //change column values into a string etc
    //column1 = value1
    var arr = [];
	for (var key in ob) {
		if (ob.hasOwnProperty(key)) {
			arr.push(key + '=' + ob[key]);
		}
	}
	return arr.toString();
}

var orm = {
	selectAll: function(table, callback){
		var queryString = 'SELECT * FROM ?? ';
		connection.query(queryString, [table], function(err, result){
			if (err) throw err;
			callback(result);
		})
	},
	insertOne: function (table, burger_name, callback) {
        var queryString = "INSERT INTO ?? (burger_name) VALUES (?)";
        console.log(queryString);
		connection.query(queryString, [table, burger_name], function (err, result) {
            if (err) throw err;
            console.log(result);
            callback(result);
            
		});
	},
	updateOne: function (table, columnValues, condition, callback) {
		var queryString = 'UPDATE ?? SET ?? = ?? WHERE ??';
		connection.query(queryString, [table, objToSql(colvals), condition], function (err, result) {
			if (err) throw err;
			callback(result);
		});
	},
};

module.exports = orm;