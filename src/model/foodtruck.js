import mongoose, { Schema } from 'mongoose';
import Review from './review';

const FoodTruckSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  foodtype: {
    type: String,
    required: true
  },
  avgcost: Number,
  geometry: {
    type: { type: String, default: 'Point' },
    coordinates: [Number]
  },
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'Review'
  }]
});

const FoodTruck = mongoose.model('FoodTruck', FoodTruckSchema);

export default FoodTruck;
