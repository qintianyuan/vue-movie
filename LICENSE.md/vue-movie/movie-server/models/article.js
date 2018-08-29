var mongoose = require('../common/db');

var article = new mongoose.Schema({
	articleTitle: String,
	articleContext: String,
	articleTime: String
});


//按照ID查找
article.statics.findByArticleId = function(id,callBack){
	this.findOne({_id:id},callBack);
};
//查找全部
article.statics.findAll = function(callBack){
	this.find({},callBack);
};

var articleModel = mongoose.model('article',article);
module.exports = articleModel;

