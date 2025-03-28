const express = require('express');
const {
  register,
  login,
  getMe,
  updateDetails,
  findMentors,
  requestMentorship,
  connectWithAlumni,
} = require('../controllers/studentController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);
router.put('/updatedetails', protect, updateDetails);
router.get('/find-mentors', protect, findMentors);
router.post('/request-mentorship/:alumniId', protect, requestMentorship);
router.post('/connect/:alumniId', protect, connectWithAlumni);

module.exports = router; 