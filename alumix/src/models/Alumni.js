const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const alumniSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ],
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: 6,
    select: false,
  },
  graduationYear: {
    type: Number,
    required: [true, 'Please add graduation year'],
  },
  course: {
    type: String,
    required: [true, 'Please add your course'],
  },
  currentPosition: {
    type: String,
  },
  company: {
    type: String,
  },
  location: {
    type: String,
  },
  skills: [{
    type: String,
  }],
  bio: {
    type: String,
  },
  profilePicture: {
    type: String,
  },
  socialLinks: {
    linkedin: String,
    twitter: String,
    github: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Encrypt password using bcrypt
alumniSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Match user entered password to hashed password in database
alumniSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('Alumni', alumniSchema); 