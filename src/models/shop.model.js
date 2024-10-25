'use strict';
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const COLLECTION_NAME = 'shops';

const shopModel = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isVerified: {
      type: String,
      default: '0',
    },
    roles: {
      type: [String],
      default: [],
    },
  },
  {
    collection: COLLECTION_NAME,
    timestamps: true,
  }
);

module.exports = model(COLLECTION_NAME, shopModel);
