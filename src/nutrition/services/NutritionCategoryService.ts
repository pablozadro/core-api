import { NutritionCategoryModel } from "@/nutrition/models";
import createError from "http-errors";

export interface CreateCategoryBody {
  title: string;
  color?: string;
}

export interface UpdateCategoryBody {
  title: string;
  color?: string;
}

export class NutritionCategoryService {

  static async getCategories(query={}) {
    return NutritionCategoryModel.find(query)
  }

  static async getCategoryById(id: string) {
    return NutritionCategoryModel.findById(id)
  }

  static async createCategory(body: CreateCategoryBody) {
    const count = await NutritionCategoryModel.findOne({ title: body.title }).countDocuments();

    if (count) {
     throw createError(400, 'Bad Request', { cause: 'Category already exists' });
    }

    return NutritionCategoryModel.create(body);
  }

  static async updateCategoryById(id: string, body: UpdateCategoryBody) {
    return NutritionCategoryModel.findByIdAndUpdate(id, body, { new: true })
  }

  static async deleteCategoryById(id: string) {
    return NutritionCategoryModel.findByIdAndDelete(id)
  }
}