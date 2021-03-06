import mongoose from "mongoose";

const hallSchema = mongoose.Schema({
  address: String,
  timeConcert: Date,
  timeRepetition: Date,
  timeRepetitionEnd: Date,
  longitude: Number,
  latitude: Number,
});

export default mongoose.model("halls", hallSchema);
