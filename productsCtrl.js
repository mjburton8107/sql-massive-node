var app = require('./index.js');

module.exports = {

  create: function(app, name, desc, price, url){
    db.create_product([name, desc, price, url], function(err, product){
        console.log('this is product', product)
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
