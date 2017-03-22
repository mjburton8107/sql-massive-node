let db;

module.exports = {

  setDb: function(database) {
    db = database;
  },

  create: function(req, res){
    const { name, desc, price, url } = req.body;
    db.create_product([name, desc, price, url], function(err, product){
      console.log("this is err", err)
      res.send('product added')
    })
  },
  getOne: function(req, res){
    var id = req.params.productId;
    db.read_product([id], function(err, product){
      res.send(product)
    })
  },
  getAll: function(req, res){
    db.read_products(function(err, products){
    res.send(products)
    })
  },
  update: function(req, res){
    console.log('this is req.params', req.params);
    console.log('this is req.query', req.query);
    var id = req.params.productId;
    var query = req.query.desc
    db.update_product([id, query], function(err, products){
      res.send('product updated');
    })
  },
  delete: function(req, res){
    console.log('this is req.params', req.params)
    var id = req.params.productId;
    db.delete_product([id], function(err, products){
      res.send('product deleted')
    })
  }
}
