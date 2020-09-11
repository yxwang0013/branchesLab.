const Catalogue = require("../src/catalogue");
const Product = require("../src/product");

const cat = new Catalogue();

cat.addProduct(new Product("Product 1", 100, 10.0, 10));
cat.addProduct(new Product("Product 2", 100, 10.0, 10));
cat.addProduct(new Product("Product 3", 100, 10.0, 10));

let name = "Product 2";
// Test findProductByName
let match = cat.findProductByName(name);
if (match.name !== name) {
  console.log("find by name - Failed for valid name");
}
name = "Product X";
match = cat.findProductByName(name);
if (match !== null) {
  console.log("find by name - Failed when invalid name");
}