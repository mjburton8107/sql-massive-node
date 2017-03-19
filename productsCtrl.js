let db;

module.exports = {

  setDb: function(database) {
    db = database;
  },

  create: function(req, res){
    const { name, desc, price, url } = req.body;
    db.create_product([name, desc, price, url], function(err, product){
      res.send('product added')
    })
  },
  getOne: function(app, id){
    db.read_product([id], function(err, product){
    })
  },
  getAll: function(app){
    db.read_products(function(err, products){
    })
  },
  update: function(app, id, desc){
    db.update_product([id, desc], function(err, products){
    })
  },
  delete: function(app, id){
    db.delete_product([id], function(err, products){
    })
  }
}
