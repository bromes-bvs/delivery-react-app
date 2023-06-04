const { Schema, model } = require('mongoose');

// const { mongooseHandleError } = require('../helpers');

const productsSchema = new Schema(
  {
    title: String,
    brand: String,
    price: Number,
    img: String,
  },
  { versionKey: false }
);

// ingrSchema.post('save', mongooseHandleError);

const Products = model('products', productsSchema);

module.exports = { Products };
