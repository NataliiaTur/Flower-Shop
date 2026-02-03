import { model, Schema } from 'mongoose';

const flowerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    composition: [
      {
        flower: String,
        quantity: Number,
      },
    ],
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    colors: [String],
    description: String,

    images: [
      {
        url: { type: String, required: true },
        alt: String,
        isMain: { type: Boolean, default: false },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const FlowerCollection = model('Flower', flowerSchema);
