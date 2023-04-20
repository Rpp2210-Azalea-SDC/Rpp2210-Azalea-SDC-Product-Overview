import mongoose from "mongoose";

const productSchema = new Schema({
  product_id: Number,
  name: String,
  slogal: String,
  description: String,
  category: String,
  default_price: Number,
  features: [featureSchema],
  styles: [styleSchema],
  related: [relatedSchema],
});

const featureSchema = new mongoose.Schema({
  feature: String,
  value: String,
});

const styleSchema = new mongoose.Schema({
  style_id: Number,
  style_name: String,
  style_orig_price: Number,
  style_sales_price: Number,
  default: Boolean,
  photos: [photoSchema],
  skus: [skuSchema],
});

const photoSchema = new mongoose.Schema({
  thumbnail_url: String,
  url: String,
});

const skuSchema = new mongoose.Schema({
  quantity: Number,
  size: String,
});

const relatedSchema = new mongoose.Schema({
  related: Number,
});

const Product = mongoose.model("Product", productSchema);

module.export = Product;
