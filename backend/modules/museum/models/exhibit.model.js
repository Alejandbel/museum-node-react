import mongoose from 'mongoose';

const exhibitSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    typesOfArt: { type: [String], required: true },
    receiptDate: { type: Date, required: true },
    imagePath: String,
    employee: { type: mongoose.Types.ObjectId, ref: 'user' },
    __v: { type: Number, select: false },
  },
  { timestamps: true },
);

export const ExhibitModel = mongoose.model('exhibit', exhibitSchema);
