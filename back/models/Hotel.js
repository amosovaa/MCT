import mongoose from "mongoose";

const hotelSchema = mongoose.Schema({
  time: Date,
  name: String,
  longitude: Number,
  latitude: Number,
});

export default mongoose.model("hotels", hotelSchema);
