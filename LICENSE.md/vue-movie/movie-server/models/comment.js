var mongoose = require('../common/db');

var comment = new mongoose.Schema({
	movie_id: String,
	username: String,
	context: String,
	check: Boolean
});
//按照电影ID查找
comment.statics.findByMovieId = function(m_id,callBack){
	this.find({movie_id:m_id,check:true},callBack);
};
//查找所有
comment.statics.findAll = function(callBack){
	this.find({},callBack);
};

var commentModel = mongoose.model('comment',comment);

module.exports = commentModel;
