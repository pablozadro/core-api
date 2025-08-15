import mongoose from 'mongoose';


const nutritionItemSchema = new mongoose.Schema({
  title: { 
    type: String,
    required: true
  },
  detail: { 
    type: String,
    default: '-'
  },
  proteins: {
    type: Number,
    default: null
  },
  carbohydrates: {
    type: Number,
    default: null
  },
  calories: {
    type: Number,
    default: null
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref: 'Nutrition_Category',
    default: null
  },
  group: {
    type: mongoose.Types.ObjectId,
    ref: 'Nutrition_Group',
    default: null
  }
},
{ 
  timestamps: false
});


export const NutritionItemModel = mongoose.model('Nutrition_Item', nutritionItemSchema);