const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const StudentSchema = new mongoose.Schema({
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
  studentId: {
    type: String,
    required: [true, 'Please add your student ID'],
    unique: true,
  },
  currentYear: {
    type: Number,
    required: [true, 'Please add your current year'],
  },
  course: {
    type: String,
    required: [true, 'Please add your course'],
  },
  branch: {
    type: String,
    required: [true, 'Please add your branch'],
  },
  cgpa: {
    type: Number,
    min: 0,
    max: 10,
  },
  // Interest and Career Fields
  interests: [{
    type: String,
    enum: ['Web Development', 'Mobile Development', 'Data Science', 'AI/ML', 
           'Cloud Computing', 'Cybersecurity', 'UI/UX Design', 'Product Management',
           'Business Analytics', 'Digital Marketing', 'Finance', 'Consulting']
  }],
  careerGoals: {
    type: String,
    required: [true, 'Please describe your career goals'],
  },
  // Mentorship Related Fields
  mentorPreferences: {
    industry: [{
      type: String,
      enum: ['Technology', 'Finance', 'Healthcare', 'Education', 'Manufacturing', 'Other']
    }],
    experienceLevel: {
      type: String,
      enum: ['Entry Level', 'Mid Level', 'Senior Level', 'Executive Level']
    },
    preferredMentoringTopics: [{
      type: String,
      enum: ['Career Guidance', 'Technical Skills', 'Soft Skills', 'Interview Preparation',
             'Project Guidance', 'Industry Insights', 'Networking', 'Leadership']
    }]
  },
  currentMentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Alumni'
  },
  mentorshipHistory: [{
    mentor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Alumni'
    },
    startDate: Date,
    endDate: Date,
    status: {
      type: String,
      enum: ['Active', 'Completed', 'Terminated']
    },
    feedback: String
  }],
  
  // Networking and Connections
  connections: [{
    alumni: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Alumni'
    },
    connectionDate: {
      type: Date,
      default: Date.now
    },
    status: {
      type: String,
      enum: ['Pending', 'Connected', 'Rejected'],
      default: 'Pending'
    },
    notes: String
  }],
  // Profile Information
  profilePicture: {
    type: String,
  },
  bio: {
    type: String,
  },
  skills: [{
    type: String,
  }],
  projects: [{
    title: String,
    description: String,
    technologies: [String],
    githubLink: String,
    liveLink: String
  }],
  // Social Links
  socialLinks: {
    linkedin: String,
    github: String,
    portfolio: String
  },
  // Availability for Mentorship
  availability: {
    preferredDays: [{
      type: String,
      enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    }],
    preferredTime: {
      type: String,
      enum: ['Morning', 'Afternoon', 'Evening']
    },
    timezone: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// Encrypt password using bcrypt
StudentSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Match user entered password to hashed password in database
StudentSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('Student', StudentSchema);