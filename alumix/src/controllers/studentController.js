const Student = require('../models/Student');
const Alumni = require('../models/Alumni');
const jwt = require('jsonwebtoken');

// @desc    Register student
// @route   POST /api/v1/students/register
// @access  Public
exports.register = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET, {
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

// @desc    Login student
// @route   POST /api/v1/students/login
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

    const student = await Student.findOne({ email }).select('+password');

    if (!student || !(await student.matchPassword(password))) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
      });
    }

    const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET, {
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

// @desc    Get current logged in student
// @route   GET /api/v1/students/me
// @access  Private
exports.getMe = async (req, res) => {
  try {
    const student = await Student.findById(req.student.id);

    res.status(200).json({
      success: true,
      data: student,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Update student details
// @route   PUT /api/v1/students/updatedetails
// @access  Private
exports.updateDetails = async (req, res) => {
  try {
    const fieldsToUpdate = {
      name: req.body.name,
      email: req.body.email,
      interests: req.body.interests,
      careerGoals: req.body.careerGoals,
      mentorPreferences: req.body.mentorPreferences,
      skills: req.body.skills,
      projects: req.body.projects,
      socialLinks: req.body.socialLinks,
      availability: req.body.availability,
    };

    const student = await Student.findByIdAndUpdate(req.student.id, fieldsToUpdate, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      data: student,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Find potential mentors based on student preferences
// @route   GET /api/v1/students/find-mentors
// @access  Private
exports.findMentors = async (req, res) => {
  try {
    const student = await Student.findById(req.student.id);
    
    const potentialMentors = await Alumni.find({
      $or: [
        { skills: { $in: student.interests } },
        { currentPosition: { $in: student.mentorPreferences.industry } }
      ]
    }).select('-password');

    res.status(200).json({
      success: true,
      count: potentialMentors.length,
      data: potentialMentors,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Request mentorship from an alumni
// @route   POST /api/v1/students/request-mentorship/:alumniId
// @access  Private
exports.requestMentorship = async (req, res) => {
  try {
    const alumni = await Alumni.findById(req.params.alumniId);
    
    if (!alumni) {
      return res.status(404).json({
        success: false,
        message: 'Alumni not found',
      });
    }

    // Add to mentorship history
    const student = await Student.findByIdAndUpdate(
      req.student.id,
      {
        $push: {
          mentorshipHistory: {
            mentor: alumni._id,
            startDate: new Date(),
            status: 'Pending'
          }
        }
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: 'Mentorship request sent successfully',
      data: student,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Connect with an alumni
// @route   POST /api/v1/students/connect/:alumniId
// @access  Private
exports.connectWithAlumni = async (req, res) => {
  try {
    const alumni = await Alumni.findById(req.params.alumniId);
    
    if (!alumni) {
      return res.status(404).json({
        success: false,
        message: 'Alumni not found',
      });
    }

    // Add to connections
    const student = await Student.findByIdAndUpdate(
      req.student.id,
      {
        $push: {
          connections: {
            alumni: alumni._id,
            status: 'Pending'
          }
        }
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: 'Connection request sent successfully',
      data: student,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}; 