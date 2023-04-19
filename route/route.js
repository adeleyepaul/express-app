app.get('/users/:name/:age/:sex', function(req, res) {
    const user = {
      name: req.params.name,
      age: req.params.age,
      sex: req.params.sex
    };
    
    res.json(user);
  });
  