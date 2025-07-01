// documentController.js

const Document = require('../models/Document');

exports.uploadDoc = async (req, res) => {
  try {
    const file = req.file;
    const doc = await Document.create({
      user: req.user.id,
      filename: file.originalname,
      path: file.path
    });
    res.status(201).json({ message: 'File uploaded', doc });
  } catch (err) {
    res.status(400).json({ error: 'Upload failed' });
  }
};

exports.getDocs = async (req, res) => {
  const docs = await Document.find({ user: req.user.id });
  res.json(docs);
};


