const mongoose = require("mongoose");

let db;

module.exports = function(){
	if(!db){
		const PASSWORD = 'ytfy';
		const DATABASE = 'ytfy';
		mongoose.Promise = global.Promise;
		db = mongoose.connect(`mongodb://127.0.0.1:27017/${DATABASE}`);
	}
	return db;
}
