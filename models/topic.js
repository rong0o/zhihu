var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId  = Schema.ObjectId;

var TopicSchema = new Schema({
  tag: { type: String },
  question_id: { type: ObjectId },
  question_title: { type: String },
  create_at: { type: Date, default: Date.now }
});

mongoose.model('Topic', TopicSchema);

exports.newTagSave=function(){
  var topic = new Topic();
  topic.tag = tag;
  topic.question_id = question_id;
  topic.save(callback);
}
