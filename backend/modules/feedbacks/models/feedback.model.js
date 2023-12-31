import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    rating: { type: Number, required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Types.ObjectId, ref: 'user' },
    __v: { type: Number, select: false },
  },
  { timestamps: true },
);

export const FeedbackModel = mongoose.model('feedback', feedbackSchema);
