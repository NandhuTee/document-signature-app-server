const express = require('express');
const multer = require('multer');
const { uploadDoc, getDocs } = require('../controllers/documentController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage });

router.post('/upload', authMiddleware, upload.single('file'), uploadDoc);
router.get('/', authMiddleware, getDocs);

module.exports = router;
