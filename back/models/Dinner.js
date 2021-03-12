import mongoose from "mongoose";

const dinnerSchema = mongoose.Schema({
  address: String,
  time: Date,
  longitude: Number,
  latitude: Number,
});

export default mongoose.model("dinners", dinnerSchema);
