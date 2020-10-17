const mongoose = require('mongoose');

const sectionSchema = mongoose.Schema(
  {
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Course'
    },
    sectionTitle: {
      type: String,
      required: true
    },
    lessons: [
      {
        lessonOrder: { type: Number, required: true },
        lesson: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Lesson'
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

const Section = mongoose.model('Section', sectionSchema);

module.exports = Section;
