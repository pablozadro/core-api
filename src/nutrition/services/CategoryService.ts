import { NutritionCategoryModel } from "@/nutrition/models";
import createError from "http-errors";

export interface CreateCategoryBody {
  title: string;
}

export interface UpdateCategoryBody {
  title: string;
}

export interface GetCategoriesOptions {
  filter?: any;
  projection?: string[];
  sort?: any;
  limit?: number;
}

export interface GetCategoryOptions {
  projection?: string[];
}

export class CategoryService {
  static readonly DEFAULT_LIMIT = 500;
  static readonly DEFAULT_SORT = { title: 1 };
  static readonly DEFAULT_PROJECTION = ['title', 'updatedAt'];

  static async getCategories(options?: GetCategoriesOptions) {
    const filter = options?.filter || {};
    const projection = options?.projection || this.DEFAULT_PROJECTION;
    const sort = options?.sort || this.DEFAULT_SORT;
    const limit = options?.limit || this.DEFAULT_LIMIT;

    return NutritionCategoryModel
      .find(filter)
      .select(projection)
      .sort(sort)
      .limit(limit);
  }

  static async getCategoryById(id: string, options: GetCategoryOptions = {}) {
    const projection = options?.projection || this.DEFAULT_PROJECTION;
    return NutritionCategoryModel.findById(id).select(projection);
  }

  static async createCategory(body: CreateCategoryBody) {
    const count = await NutritionCategoryModel.findOne({ title: body.title }).countDocuments();

    if (count) {
     throw createError(400, 'Bad Request', { cause: 'Category already exists' });
    }

    return NutritionCategoryModel.create(body);
  }

  static async createCategories(data: CreateCategoryBody[]) {
    return NutritionCategoryModel.insertMany(data);
  }

  static async updateCategoryById(id: string, body: UpdateCategoryBody) {
    return NutritionCategoryModel.findByIdAndUpdate(id, body, { new: true })
  }

  static async deleteCategoryById(id: string) {
    return NutritionCategoryModel.findByIdAndDelete(id)
  }

  static async deleteAllCategories() {
    return NutritionCategoryModel.collection.drop();
  }
}