import mongoose from "mongoose";

const coordsSchema = mongoose.Schema({
  latitude: Number,
  longitude: Number,
});

export default mongoose.model("coords", coordsSchema);
