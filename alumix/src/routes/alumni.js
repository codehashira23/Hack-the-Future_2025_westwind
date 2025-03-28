const express = require('express');
const {
  register,
  login,
  getMe,
  updateDetails,
  getAlumni,
} = require('../controllers/alumniController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);
router.put('/updatedetails', protect, updateDetails);
router.get('/', protect, getAlumni);

module.exports = router; 