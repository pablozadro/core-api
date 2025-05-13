import mongoose, { Types } from 'mongoose';

export interface NutritionItem {
  _id: Types.ObjectId;
  title: string;
  category: string;
  calories: number | null;
  proteins: number | null;
  createdAt: string;
  updatedAt: string;
}

const nutritionItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: {
    type: Types.ObjectId,
    ref : "nutrition-categories",
    require: true
  },
  calories: { type:  Number, default: null },
  proteins: { type:  Number, default: null },
},
{ 
  timestamps: true 
});


export const NutritionItemModel = mongoose.model('nutrition-items', nutritionItemSchema);