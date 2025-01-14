const { ObjectId } = require('mongoose').Types;
const { Student, Course } = require('../models');

// Aggregate function to get the number of students overall
const headCount = async () => {
  try {
    const numberOfStudents = await Student.aggregate([{ $count: 'totalStudents' }]);
    return numberOfStudents[0]?.totalStudents || 0;
  } catch (err) {
    console.error('Error calculating headCount:', err);
    throw new Error('Failed to retrieve head count');
  }
};

// Aggregate function to calculate the overall grade of a student
const grade = async (studentId) => {
  try {
    // Validate the studentId
    if (!ObjectId.isValid(studentId)) {
      throw new Error('Invalid student ID format');
    }

    const studentGrades = await Student.aggregate([
      // Match the student by ID
      { $match: { _id: new ObjectId(studentId) } },
      // Unwind the assignments array
      { $unwind: { path: '$assignments', preserveNullAndEmptyArrays: true } },
      // Group by student ID and calculate the average score
      {
        $group: {
          _id: '$_id',
          overallGrade: { $avg: '$assignments.score' },
          assignments: { $push: '$assignments' },
        },
      },
    ]);

    return studentGrades[0] || { message: 'No grades found for this student' };
  } catch (err) {
    console.error('Error calculating grade:', err);
    throw new Error('Failed to retrieve student grade');
  }
};

module.exports = {
  // Get all students
  async getStudents(req, res) {
    try {
      const students = await Student.find();
      const studentObj = {
        students,
        headCount: await headCount(),
      };
      return res.json(studentObj);
    } catch (err) {
      console.error('Error fetching students:', err);
      return res.status(500).json({ message: 'Failed to retrieve students' });
    }
  },
  // Get a single student
  async getSingleStudent(req, res) {
    try {
      // Validate the studentId
      if (!ObjectId.isValid(req.params.studentId)) {
        return res.status(400).json({ message: 'Invalid student ID' });
      }

      const student = await Student.findOne({ _id: req.params.studentId })
        .select('-__v')
        .lean();

      if (!student) {
        return res.status(404).json({ message: 'No student with that ID' });
      }

      res.json({
        student,
        grade: await grade(req.params.studentId),
      });
    } catch (err) {
      console.error('Error fetching single student:', err);
      return res.status(500).json({ message: 'Failed to retrieve the student' });
    }
  },
  // Create a new student
  async createStudent(req, res) {
    try {
      const student = await Student.create(req.body);
      res.json(student);
    } catch (err) {
      console.error('Error creating student:', err);
      res.status(500).json({ message: 'Failed to create student' });
    }
  },
      // Delete a student and remove them from the course
  async deleteStudent(req, res) {
    try {
      // Validate studentId
      if (!ObjectId.isValid(req.params.studentId)) {
        return res.status(400).json({ message: 'Invalid student ID' });
      }

      const student = await Student.findByIdAndDelete(req.params.studentId);

      if (!student) {
        return res.status(404).json({ message: 'No such student exists' });
      }

      // Remove the student from all courses, even if no courses exist
      await Course.updateMany(
        { students: req.params.studentId },
        { $pull: { students: req.params.studentId } }
      );

      res.json({ message: 'Student successfully deleted' });
    } catch (err) {
      console.error('Error deleting student:', err);
      res.status(500).json({ message: 'Failed to delete student' });
    }
  },
  // Add an assignment to a student
  async addAssignment(req, res) {
    try {
      console.log('Adding an assignment:', req.body);
      const student = await Student.findOneAndUpdate(
        { _id: req.params.studentId },
        { $addToSet: { assignments: req.body } },
        { runValidators: true, new: true }
      );

      if (!student) {
        return res.status(404).json({ message: 'No student found with that ID' });
      }

      res.json(student);
    } catch (err) {
      console.error('Error adding assignment:', err);
      res.status(500).json({ message: 'Failed to add assignment' });
    }
  },
  // Remove an assignment from a student
  async removeAssignment(req, res) {
    try {
      const student = await Student.findOneAndUpdate(
        { _id: req.params.studentId },
        { $pull: { assignments: { assignmentId: req.params.assignmentId } } },
        { runValidators: true, new: true }
      );

      if (!student) {
        return res.status(404).json({ message: 'No student found with that ID' });
      }

      res.json(student);
    } catch (err) {
      console.error('Error removing assignment:', err);
      res.status(500).json({ message: 'Failed to remove assignment' });
    }
  },
};