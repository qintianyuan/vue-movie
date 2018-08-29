var mongoose = require('../common/db');

var recommend = new mongoose.Schema({
	recommendImg: String,
	recommendSrc: String,
	recommendString: String
});


//按照ID查找
recommend.statics.findByIndexId = function(m_id,callBack){
	this.findOne({findByIndexId: m_id},callBack);
};
//查找全部
recommend.statics.findAll = function(callBack){
	this.find({},callBack);
};

var recommendModel = mongoose.model('recommend',recommend);
module.exports = recommendModel;

