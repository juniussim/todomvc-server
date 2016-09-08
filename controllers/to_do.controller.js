var ToDo = require('mongoose').model('ToDo');

module.exports = {

  index: function(req, res, next) {
    ToDo.find({}, function(err, todos) {
      if (err) return next(err);
			res.json(todos);
    });
  },

  create: function(req, res, next) {
    var toDo = new ToDo(req.body);

    toDo.save(function(err) {
      if (err) return next(err);
      res.json(toDo);
    });

  },

	update: function(req, res, next) {
	  ToDo.findByIdAndUpdate(req.params.id, req.body, function(err, todo) {
	    if (err) {
	      return next(err);
	    } else {
	      res.json(todo);
	    }
	  });
	},

	destroy: function(req, res, next) {
		ToDo.remove({
			_id: req.params.id
		}, function(err, todo){
			if (err) return next(err);
			res.send('Task successfully deleted')
		})
  }

}

  // show: function(req, res) {
  //   res.json(req.user);
  // },
  // update: function(req, res, next) {
  //   User.findByIdAndUpdate(req.user.id, req.body, function(err, user) {
  //     if (err) {
  //       return next(err);
  //     } else {
  //       res.json(user);
  //     }
  //   });
  // },

  // user_by_id: function(req, res, next, id) {
  //   User.findOne({
  //       _id: id
  //     }, 'firstName lastName',
  //     function(err, user) {
  //       if (err) {
  //         return next(err);
  //       } else {
  //         req.user = user;
  //         next();
  //       }
  //     });
  // }
