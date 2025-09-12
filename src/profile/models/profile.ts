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
  },
  height: { 
    type: Number, 
    default: null,
  },
  bornDate: { 
    type: Date, 
    default: null,
  },
  gender: { 
    type: String,
    enum: ['', MALE, FEMALE],
    default: ''
  },
  activityLevel: { 
    type: String,
    enum: [
      '',
      SEDENTARY,
      LIGHTLY_ACTIVE,
      MODERATELY_ACTIVE,
      VERY_ACTIVE,
      SUPER_ACTIVE,
    ],
    default: ''
  }
},
{ 
  timestamps: false
});


export const Profile = mongoose.model('Profile', profileSchema);