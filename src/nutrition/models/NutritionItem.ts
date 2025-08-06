import mongoose from 'mongoose';


const nutritionItemSchema = new mongoose.Schema({
  title: { 
    type: String,
    required: true
  },
  detail: { 
    type: String,
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
  group: {
    type: mongoose.Types.ObjectId,
    ref: 'NutritionGroup',
    default: null
  }
},
{ 
  timestamps: false
});


export const NutritionItemModel = mongoose.model('NutritionItem', nutritionItemSchema);