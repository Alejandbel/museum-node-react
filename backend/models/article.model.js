import mongoose from 'mongoose';

/**
 * @typedef {Object} Article
 * @property {ObjectId} _id
 * @property {string} title
 * @property {string} [description]
 * @property {string} [content]
 * @property {string} [imagePath]
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

const articleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    content: String,
    imagePath: String,
    __v: { type: Number, select: false },
  },
  { timestamps: true },
);

export const Article = mongoose.model('article', articleSchema);
