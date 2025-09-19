import mongoose from 'mongoose';
import { 
  MALE, 
  FEMALE,
  SEDENTARY,
  LIGHTLY_ACTIVE,
  MODERATELY_ACTIVE,
  VERY_ACTIVE,
  SUPER_ACTIVE,
  LOOSE,
  MAINTAIN,
  GAIN,
} from '@/nutrition/config';

const nutritionProfileSchema = new mongoose.Schema({
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
  bornYear: { 
    type: Number, 
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
  },
  caloriesGoal: { 
    type: String,
    enum: [
      '',
      LOOSE,
      MAINTAIN,
      GAIN
    ],
    default: ''
  }
},
{ 
  timestamps: false
});


export const NutritionProfile = mongoose.model('nutrition_profile', nutritionProfileSchema);