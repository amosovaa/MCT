import Coords from "../models/Coords.js";
export const location_get = async (req, res) => {
  const coords = await Coords.findOne();
  res.json(coords);
};
