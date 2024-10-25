'use strict';
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const COLLECTION_NAME = 'tokens';

const tokenModel = new Schema(
  {
    publicKey: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
      required: true,
    },
    refreshTokenUsed: {
      type: [String],
      default: [],
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

module.exports = model(COLLECTION_NAME, tokenModel);
