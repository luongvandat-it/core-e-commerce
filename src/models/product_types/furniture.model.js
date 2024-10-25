'use strict';
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const COLLECTION_NAME = 'furniture';

const furnitureModel = new Schema(
  {
    material: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
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

module.exports = model(COLLECTION_NAME, furnitureModel);
