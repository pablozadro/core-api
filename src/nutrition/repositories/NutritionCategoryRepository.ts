import { NutritionCategoryModel } from "@/nutrition/models";

export interface CreateCategoryPayload {
  title: string;
}

export class NutritionCategoryRepository {

  static async getCategories() {
    return NutritionCategoryModel.find();
  }

  static async getCategoryByTitle(title: string) {
    return NutritionCategoryModel.findOne({ title });
  }

  static async createCategory(payload: CreateCategoryPayload) {
    const { title } = payload;
    const category = await NutritionCategoryRepository.getCategoryByTitle(title);

    if(category) {
      throw new Error('Category already exists');
    }

    return NutritionCategoryModel.create(payload);
  }
}