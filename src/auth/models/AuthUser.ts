import mongoose from 'mongoose';


const authUserSchema = new mongoose.Schema({
  username: { 
    type: String,
    default: '-'
  },
  email: { 
    type: String,
    index: true,
    required: true,
    unique: true, // this is NOT a validator, is just for indexes
  },
  password: { 
    type: String,
    required: true
  },
},
{ 
  timestamps: true 
});


export const AuthUserModel = mongoose.model('User', authUserSchema);