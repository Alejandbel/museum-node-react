import mongoose from 'mongoose';

const tourSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    exhibits: { type: [{ type: mongoose.Types.ObjectId, ref: 'exhibit' }], required: true },
    date: { type: Date, required: true },
    __v: { type: Number, select: false },
  },
  { timestamps: true },
);

export const TourModel = mongoose.model('tour', tourSchema);
