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
  group: {
    type: mongoose.Types.ObjectId,
    ref: 'Nutrition_Group',
    required: true
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref: 'Nutrition_Category',
    required: true
  },
  calories: {
    type: Number,
    default: null
  },
  totalFats: {
    type: Number,
    default: null
  },
  saturatedFats: {
    type: Number,
    default: null
  },
  cholesterol: {
    type: Number,
    default: null
  },
  sodium: {
    type: Number,
    default: null
  },
  carbohydrates: {
    type: Number,
    default: null
  },
  fiber: {
    type: Number,
    default: null
  },
  proteins: {
    type: Number,
    default: null
  },
},
{ 
  timestamps: false
});


export const NutritionItemModel = mongoose.model('Nutrition_Item', nutritionItemSchema);