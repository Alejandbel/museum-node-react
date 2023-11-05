import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    rating: { type: Number, required: true },
    content: { type: Date },
    authorId: String, //TODO: relation
    __v: { type: Number, select: false },
  },
  { timestamps: true },
);

export const FeedbackModel = mongoose.model('article', feedbackSchema);
