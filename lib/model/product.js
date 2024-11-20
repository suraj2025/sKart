import { Schema, model, models } from "mongoose";

const productSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  size: { type: String },
  color: { type: String },
  price: { type: Number, required: true },
  qty: { type: Number, required: true },

});

const Product = models.Product || model("Product", productSchema);

export default Product;
