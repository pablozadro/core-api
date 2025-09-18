import mongoose from 'mongoose';


const nutritionGroupSchema = new mongoose.Schema({
  title: { 
    type: String,
    required: true
  },
},
{ 
  timestamps: false
});


export const NutritionGroupModel = mongoose.model('nutrition_group', nutritionGroupSchema);