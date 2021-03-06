import mongoose from "mongoose";

const hotelSchema = mongoose.Schema({
  name: String,
  time: Date,
  longitude: Number,
  latitude: Number,
});

export default mongoose.model("hotels", hotelSchema);
