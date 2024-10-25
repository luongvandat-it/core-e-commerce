'use strict';
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const COLLECTION_NAME = 'electronics';

const electronicModel = new Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    warranty: {
      type: String,
      required: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'products',
      required: true,
    },
  },
  {
    collection: COLLECTION_NAME,
    timestamps: true,
  }
);

module.exports = model(COLLECTION_NAME, electronicModel);
