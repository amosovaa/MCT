import mongoose from "mongoose";

const breakfastSchema = mongoose.Schema({
  address: String,
  time: Date,
  longitude: Number,
  latitude: Number,
});

export default mongoose.model("breakfasts", breakfastSchema);
