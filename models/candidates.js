const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema(
  {
    sl: {
      type: Number,
      required: false, // এখন optional রাখো কারণ পুরনো data তে নাও থাকতে পারে
      unique: false,   // পরে চাইলে unique index add করা যাবে
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    passportNo: {
      type: String,
      required: [true, 'Passport number is required'],
      trim: true,
      uppercase: true, // সব passport no uppercase এ থাকবে consistency এর জন্য
      unique: true,    // duplicate prevent করবে
    },
    receivedDate: {    // ✅ spelling ঠিক করা হয়েছে (আগে "reveivedDate" ছিল)
      type: Date,
    },
    birthDate: {
      type: Date,
    },
    agent: {
      type: String,
      trim: true,
      default: null,
    },
    agency: {
      type: String,
      trim: true,
      default: null,
    },
  },
  { timestamps: true } // createdAt & updatedAt auto add করবে
);

module.exports = mongoose.model('Candidate', candidateSchema);
