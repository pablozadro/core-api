import mongoose from 'mongoose';


const nutritionCategorySchema = new mongoose.Schema({
  title: { 
    type: String,
    required: true
  },
},
{ 
  timestamps: false
});


export const NutritionCategoryModel = mongoose.model('nutrition_category', nutritionCategorySchema);