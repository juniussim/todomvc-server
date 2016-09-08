var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ToDoSchema = new Schema({
  task: String,
  completed: { type: Boolean, default: false}
});

mongoose.model('ToDo', ToDoSchema);
