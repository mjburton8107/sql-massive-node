--This query will need to take the 4 parameters defined in the schema and insert a record into the database.

insert into products (product_name, description, price, url)
  values($1, $2, $3, $4);
