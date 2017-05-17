import mongoose, { Schema } from 'mongoose';
import FoodTruck from './foodtruck';

const ReviewSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  text: String,
  foodtruck: {
    type: Schema.Types.ObjectId,
    ref: 'FoodTruck',
    required: true
  }
});

const Review = mongoose.model('Review', ReviewSchema);

export default Review;
