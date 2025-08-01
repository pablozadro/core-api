import mongoose from 'mongoose';

export interface AuthUserFull {
  _id: string;
  username: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface AuthUserPublic {
  _id: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

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