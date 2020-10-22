const mongoose = require('mongoose');

const courseSchema = mongoose.Schema(
  {
    courseTitle: {
      type: String,
      required: true
    },
    sections: [
      {
        section: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Section'
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
