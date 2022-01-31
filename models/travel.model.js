const mongoose = require("mongoose");

const TravelSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  providerId: { type: String, default: "" },
  isCash: { type: Boolean, default: true },
  expectedTime: { type: String, default: 0 },
  licencePlate: { type: String, default: "" },
  card: { type: String, default: "" },
  paymentMethod: { type: String, default: "" },
  startCity:{type: String, default: "" },
  startLocation: { type: String, default: "" },
  endLocation: { type: String, default: "" },
  providerLocation: { type: String, default: "" },
  calledHour: { type: String, default: "" },
  startHour: { type: String, default: "" },
  endHour: { type: String, default: "" },
  whenProviderComed: { type: String, default: "" },
  providerVehicle: { type: String, default: "" },
  providerVehicleType: { type: String, default: "" },
  providerRating: { type: String, default: "" },
  status: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
}, {timestamps:true});

const Travel = mongoose.model("Travel", TravelSchema);

module.exports = Travel;
