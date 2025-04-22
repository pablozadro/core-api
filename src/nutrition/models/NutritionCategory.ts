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
    default: 'rgb(230,230,230)'
  },
},
{ 
  timestamps: true 
});


export const NutritionCategoryModel = mongoose.model('NutritionCategory', nutritionCategorySchema);