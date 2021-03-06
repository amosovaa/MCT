import mongoose from "mongoose";

const citySchema = mongoose.Schema({
  name: String,
  dateIn: Date,
  dateOut: Date,
  // timeOut: Date,
  longitude: Number,
  latitude: Number,
  hotel: { type: mongoose.Types.ObjectId, ref: "hotels" },
  lunch: { type: mongoose.Types.ObjectId, ref: "lunchs" },
  hall:{ type: mongoose.Types.ObjectId, ref: "halls" },
});

export default mongoose.model("cities", citySchema);
