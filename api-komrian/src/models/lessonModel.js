const mongoose = require('mongoose');

const lessonSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    order: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;
