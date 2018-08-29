var mongoose = require('../common/db');

var mail = new mongoose.Schema({
	fromUser: String,
	toUser: String,
	title: String,
	context: String
});


//按照ID查找
mail.statics.findByToUserId = function(user_id,callBack){
	this.findOne({toUser: user_id},callBack);
};
//查找全部
mail.statics.findByFromUserId = function(user_id,callBack){
	this.find({fromUser: user_id},callBack);
};

var mailModel = mongoose.model('mail',mail);
module.exports = mailModel;

