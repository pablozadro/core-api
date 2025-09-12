import mongoose from 'mongoose';
import { 
  MALE, 
  FEMALE,
  SEDENTARY,
  LIGHTLY_ACTIVE,
  MODERATELY_ACTIVE,
  VERY_ACTIVE,
  SUPER_ACTIVE,
} from '@/profile/config'

const profileSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },
  weight: { 
    type: Number, 
    default: null,
    required: true,
  },
  height: { 
    type: Number, 
    default: null,
    required: true,
  },
  bornDate: { 
    type: Date, 
    default: null,
    required: true,
  },
  gender: { 
    type: String,
    enum: [MALE, FEMALE],
    required: true,
  },
  activityLevel: { 
    type: String,
    enum: [
      SEDENTARY,
      LIGHTLY_ACTIVE,
      MODERATELY_ACTIVE,
      VERY_ACTIVE,
      SUPER_ACTIVE,
    ],
    required: true,
  }
},
{ 
  timestamps: false
});


export const Profile = mongoose.model('Profile', profileSchema);