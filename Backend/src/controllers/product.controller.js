// productController.js
const productService = require("../services/product.service.js")

// Create a new product
const createProduct=async(req, res) =>{
  try {
    const product = await productService.createProduct(req.body);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
}

// Delete a product by ID
const deleteProduct=async(req, res)=> {
  try {
    const productId = req.params.id;
    const message = await productService.deleteProduct(productId);
    return res.send({ message });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
}

// Update a product by ID
const updateProduct=async(req, res) =>{
  try {
    const productId = req.params.id;
    const product = await productService.updateProduct(productId, req.body);
    return res.send(product);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// Get all products
// const getAllProducts(req, res) {
//   try {
//     const products = await productService.getAllProducts();
//     res.send(products);
//   } catch (err) {
//     res.status(500).send({ error: err.message });
//   }
// }

// Find a product by ID
const findProductById=async(req, res) =>{
  try {
    const productId = req.params.id;
    const product = await productService.findProductById(productId);
    return res.status(200).send(product);
  } catch (err) {
    return res.status(404).send({ message: err.message });
  }
}

// Find products by category
const findProductByCategory=async(req, res) =>{
  try {
    const category = req.params.category;
    const products = await productService.findProductByCategory(category);
    res.send(products);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Search products by query
const searchProduct=async(req, res) =>{
  try {
    const query = req.params.query;
    const products = await productService.searchProduct(query);
    res.send(products);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Get all products with filtering and pagination
const getAllProducts=async(req, res) =>{
  try {

    const products = await productService.getAllProducts(req.query);

    return res.status(200).send(products);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
}

const createMultipleProduct= async (req, res) => {
  try {
    await productService.createMultipleProduct(req.body)
    res
      .status(202)
      .send({ message: "Products Created Successfully", success: true });
  } catch (error) {
    res.status(500).send({ error: "Something went wrong" });
  }
};

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
  findProductById,
  findProductByCategory,
  searchProduct,
  createMultipleProduct

};
