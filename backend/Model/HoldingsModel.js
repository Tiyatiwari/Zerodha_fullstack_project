const { model } = require("mongoose");
const { HoldingsSchema } = require("../Schemas/HoldingsSchema");

// Create the model without using the 'new' keyword
const HoldingsModel = model("holding", HoldingsSchema);

module.exports = { HoldingsModel };