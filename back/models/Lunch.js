import mongoose from "mongoose";

const lunchSchema = mongoose.Schema({
  time: Date,
  longitude: Number,
  latitude: Number,
});

export default mongoose.model("lunchs", lunchSchema);
