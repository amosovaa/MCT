import mongoose from "mongoose";

const lunchSchema = mongoose.Schema({
  address: String,
  time: Date,
  longitude: Number,
  latitude: Number,
});

export default mongoose.model("lunchs", lunchSchema);
