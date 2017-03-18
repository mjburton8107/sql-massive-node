/*This query will take in an id and a new description. Find the product with the id and
update it's description with the new description.*/

UPDATE products
SET Description = $2
WHERE ID = $1;
