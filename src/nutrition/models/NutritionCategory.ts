import mongoose, { Types } from 'mongoose';



export interface NutritionCategory {
  _id: Types.ObjectId;
  color: string;
  createdAt: string;
  updatedAt: string;
}

const nutritionCategorySchema = new mongoose.Schema({
  title: { 
    type: String,
    required: true,
  }
},
{ 
  timestamps: true 
});


export const NutritionCategoryModel = mongoose.model('nutrition-categories', nutritionCategorySchema);