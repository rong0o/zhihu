var mongoose = require('mongoose');

var Schema=mongoose.Schema;
var ObjectId  = Schema.ObjectId;
var UserSchema=new Schema({
    NickName: { type: String },
    password:{ type: String }
});

var User=mongoose.model("users",UserSchema);


exports.newUser=function(nickname,password,callback){
    User.find({ NickName: nickname }, function (err, user) {
        if (user.length > 0) {
            err = {};
            err.message = '该账号已被注册！';
            return callback(err, user);
        }
        // 没被注册
        var user = new User();

        user.NickName=nickname;
        user.password=password;
        user.save(callback); //callback这个save里是作为回调函数，
        //save()后调用的，所以传入的函数的引用,参数也是save里本来就会有的
    });
};


exports.login=function(nickname,password,callbak){
    User.findOne({NickName:nickname},function(err,user){

       if(err){
           err={};
           err.message="没有该账号";
           return callbak(err);
       }

        callbak(err,user);
    });
};

exports.findUserById=function(author_id,callback){
  User.findOne({_id:author_id},callback);
};