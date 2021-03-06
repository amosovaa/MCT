import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  cities: [{ type: mongoose.Types.ObjectId, ref: "cities" }],
  users: [{ type: mongoose.Types.ObjectId, ref: "users" }],
});

export default mongoose.model("tour", tourSchema);
