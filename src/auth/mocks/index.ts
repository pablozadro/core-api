import { Types } from 'mongoose';
import { AuthUserFull } from '@/auth/authTypes';

export const mockUser1: AuthUserFull = {
  _id: new Types.ObjectId("67f7ec01d36cf6961cbd6d13"),
  username: "mock-user-1",
  email: "mock-user-1@localhost.io",
  password: "abc123",
  createdAt: "2025-04-10T16:04:17.040+00:00",
  updatedAt: "2025-04-10T23:26:43.668+00:00",
}

export const mockUser2: AuthUserFull = {
  _id: new Types.ObjectId("67f7ec01d36cf6961cbd6d14"),
  username: "mock-user-2",
  email: "mock-user-2@localhost.io",
  password: "abc123",
  createdAt: "2025-04-10T16:04:17.040+00:00",
  updatedAt: "2025-04-10T23:26:43.668+00:00",
}