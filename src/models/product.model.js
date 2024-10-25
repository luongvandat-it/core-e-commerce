'use strict';
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const COLLECTION_NAME = 'products';
const PRODUCT_TYPES = ['Electronics', 'Clothing', 'Furniture'];

const productModel = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    thumb: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: PRODUCT_TYPES,
    },
    rating: {
      type: Number,
      default: 3,
      min: 1,
      max: 5,
      set: (value) => Math.round(value * 10) / 10,
    },
    variations: {
      type: Array,
      default: [],
    },
    status: {
      type: String,
      required: true,
    },
    shop: {
      type: Schema.Types.ObjectId,
      ref: 'shops',
      required: true,
    },
  },
  {
    collection: COLLECTION_NAME,
    timestamps: true,
  }
);

productModel.index(
  { name: 'text', description: 'text', status: 1 },
  { unique: true }
);

productModel.pre('save', (next) => {
  this.slug = slugify(this.name, { lower: true });
  next();
});

module.exports = model(COLLECTION_NAME, productModel);
