const mongoose = require('mongoose');

const ZoneSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  type: { type: String, enum: ['safe', 'danger'], default: 'safe' },
  // GeoJSON point for center
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], required: true }, // [lng, lat]
  },
  radius: { type: Number, required: true }, // meters
  createdAt: { type: Date, default: Date.now },
});

// 2dsphere index for efficient queries
ZoneSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Zone', ZoneSchema);
