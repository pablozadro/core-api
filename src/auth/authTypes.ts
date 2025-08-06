import { Types } from 'mongoose';

export interface AuthUserFull {
  _id: Types.ObjectId;
  username: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthUserPublic {
  _id: Types.ObjectId;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}