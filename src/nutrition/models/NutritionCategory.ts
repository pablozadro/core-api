import mongoose from 'mongoose';



export interface NutritionCategory {
  _id: string;
  title: string;
  color: string;
  createdAt: string;
  updatedAt: string;
}

const nutritionCategorySchema = new mongoose.Schema({
  title: { 
    type: String,
    required: true,
  },
  color: { 
    type: String,
    required: true,
  },
},
{ 
  timestamps: true 
});


export const NutritionCategoryModel = mongoose.model('Category', nutritionCategorySchema);