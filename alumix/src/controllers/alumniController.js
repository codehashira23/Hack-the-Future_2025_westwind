const Alumni = require('../models/Alumni');
const jwt = require('jsonwebtoken');

// @desc    Register alumni
// @route   POST /api/v1/alumni/register
// @access  Public
exports.register = async (req, res) => {
  try {
    const alumni = await Alumni.create(req.body);
    const token = jwt.sign({ id: alumni._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });

    res.status(201).json({
      success: true,
      token,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Login alumni
// @route   POST /api/v1/alumni/login
// @access  Public
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide an email and password',
      });
    }

    const alumni = await Alumni.findOne({ email }).select('+password');

    if (!alumni || !(await alumni.matchPassword(password))) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
      });
    }

    const token = jwt.sign({ id: alumni._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });

    res.status(200).json({
      success: true,
      token,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get current logged in alumni
// @route   GET /api/v1/alumni/me
// @access  Private
exports.getMe = async (req, res) => {
  try {
    const alumni = await Alumni.findById(req.alumni.id);

    res.status(200).json({
      success: true,
      data: alumni,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Update alumni details
// @route   PUT /api/v1/alumni/updatedetails
// @access  Private
exports.updateDetails = async (req, res) => {
  try {
    const fieldsToUpdate = {
      name: req.body.name,
      email: req.body.email,
      currentPosition: req.body.currentPosition,
      company: req.body.company,
      location: req.body.location,
      skills: req.body.skills,
      bio: req.body.bio,
      socialLinks: req.body.socialLinks,
    };

    const alumni = await Alumni.findByIdAndUpdate(req.alumni.id, fieldsToUpdate, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      data: alumni,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get all alumni
// @route   GET /api/v1/alumni
// @access  Private
exports.getAlumni = async (req, res) => {
  try {
    const alumni = await Alumni.find();

    res.status(200).json({
      success: true,
      count: alumni.length,
      data: alumni,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}; 