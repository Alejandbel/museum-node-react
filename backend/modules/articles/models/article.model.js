import mongoose from 'mongoose';

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

export const ArticleModel = mongoose.model('article', articleSchema);
