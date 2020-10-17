const mongoose = require('mongoose');

const lessonSchema = mongoose.Schema(
  {
    sectionId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Section'
    },
    lessionTitle: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;
