import mongoose from 'mongoose';



export interface NutritionItem {
  _id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

const nutritionItemSchema = new mongoose.Schema({
  title: { 
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref : "NutritionCategory",
    require: true
  }
},
{ 
  timestamps: true 
});


export const NutritionItemModel = mongoose.model('NutritionItem', nutritionItemSchema);