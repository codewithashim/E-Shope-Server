const Product = require("../models/ProductModels");

// admin creact product
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
};

// get all product

exports.getAllProduct = async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({
    success: true,
    message: "successfully get all products",
    count: products.length,
    products,
  });
};

// admin update product

exports.updateProduct = async (req, res, next) => {
  let product = Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "product not found",
    });
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message: "product updated",
    product,
  });
};

// admin delete product

exports.deleteProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "product not found",
    });
  }
  await product.remove();
  res.status(200).json({
    success: true,
    message: "product deleted",
    
  });
};
