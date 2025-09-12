import { Types } from 'mongoose';
import { NutritionCategoryModel } from "@/nutrition/models";

export interface CreateCategoryPayload {
  title: string;
}

export interface UpdateCategoryPayload {
  title: string;
}

export class NutritionCategoryRepository {

  static async getCategories() {
    return NutritionCategoryModel.find();
  }

  static async getCategoryByTitle(title: string) {
    return NutritionCategoryModel.findOne({ title });
  }

  static async getCategoryById(id: Types.ObjectId) {
    return NutritionCategoryModel.findById(id)
  }

  static async createCategory(payload: CreateCategoryPayload) {
    const { title } = payload;
    const category = await NutritionCategoryRepository.getCategoryByTitle(title);

    if(category) {
      throw new Error('Category already exists');
    }

    return NutritionCategoryModel.create(payload);
  }

  static async updateCategoryById(id: Types.ObjectId, payload: CreateCategoryPayload) {
    const category = await NutritionCategoryRepository.getCategoryById(id);

    if(!category) {
      throw new Error('Category doesn\'t exists');
    }

    return NutritionCategoryModel.findByIdAndUpdate(id, payload, { new: true });
  }

  static async deleteCategoryById(id: Types.ObjectId) {
    const category = await NutritionCategoryRepository.getCategoryById(id);

    if(!category) {
      throw new Error('Category doesn\'t exists');
    }

    await NutritionCategoryModel.findByIdAndDelete(id);
    return category;
  }
}