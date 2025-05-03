import mongoose from 'mongoose';



export interface NutritionItemFact {
  calories: number | null;
  protein: number | null;
  totalFat: number | null;
  saturatedFats: number | null;
  transFat: number | null;
  polyUnsaturatedFats: number | null;
  monoUnsaturatedFats: number | null;
  cholesterol: number | null;
  sodium: number | null;
  totalCarbohydrates: number | null;
  dietaryFiber: number | null;
  sugar: number | null;
  vitaminD: number | null;
  calcium: number | null;
  iron: number | null;
  potassium: number | null;
}

export interface NutritionItem {
  _id: string;
  title: string;
  description: string;
  category: mongoose.Types.ObjectId;
  brand: string;
  presentation: string;
  fact: NutritionItemFact;
  createdAt: string;
  updatedAt: string;
}

const nutritionItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  category: {
    type: mongoose.Types.ObjectId,
    ref : "NutritionCategory",
    require: true
  },
  brand: { type: String },
  presentation: { type: String },
  fact: {
    calories: { type:  Number, default: null },
    protein: { type:  Number, default: null },
    totalFat: { type:  Number, default: null },
    saturatedFats: { type:  Number, default: null },
    transFat: { type:  Number, default: null },
    polyUnsaturatedFats: { type:  Number, default: null },
    monoUnsaturatedFats: { type:  Number, default: null },
    cholesterol: { type:  Number, default: null },
    sodium: { type:  Number, default: null },
    totalCarbohydrates: { type:  Number, default: null },
    dietaryFiber: { type:  Number, default: null },
    sugar: { type:  Number, default: null },
    vitaminD: { type:  Number, default: null },
    calcium: { type:  Number, default: null },
    iron: { type:  Number, default: null },
    potassium: { type:  Number, default: null },
  },
},
{ 
  timestamps: true 
});


export const NutritionItemModel = mongoose.model('Item', nutritionItemSchema);