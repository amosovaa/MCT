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
  dinner: { type: mongoose.Types.ObjectId, ref: "dinners" },
  breakfast: { type: mongoose.Types.ObjectId, ref: "breakfasts" },
  hall:{ type: mongoose.Types.ObjectId, ref: "halls" },
});

export default mongoose.model("cities", citySchema);
