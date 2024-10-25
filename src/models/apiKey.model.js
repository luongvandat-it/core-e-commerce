'use strict';
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const API_KEY_TYPES = ['0000', '1111', '2222', '3333'];
const COLLECTION_NAME = 'api_keys';

const apiKeyModel = new Schema(
  {
    key: {
      type: String,
      required: true,
    },
    permissions: {
      type: [String],
      required: true,
      enum: API_KEY_TYPES,
    },
  },
  {
    collection: COLLECTION_NAME,
    timestamps: true,
  }
);

module.exports = model(COLLECTION_NAME, apiKeyModel);
