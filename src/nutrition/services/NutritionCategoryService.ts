import { NutritionCategoryModel } from "@/nutrition/models";


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
    return NutritionCategoryModel.create(body);
  }

  static async updateCategoryById(id: string, body: UpdateCategoryBody) {
    return NutritionCategoryModel.findByIdAndUpdate(id, body, { new: true })
  }

  static async deleteCategoryById(id: string) {
    return NutritionCategoryModel.findByIdAndDelete(id)
  }
}