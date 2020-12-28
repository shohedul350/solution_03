import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,

  },
  number: {
    type: Number,
    unique: true,
    required: true,
  },
  role: {
    type: String,
    enum: ['student', 'librarian'],
    required: true,
  },
  tempDeleted: {
    type: Boolean,
    default: false,
  },
},
{
  timestamps: true,
});
const User = mongoose.model('user', userSchema);
export default User;
