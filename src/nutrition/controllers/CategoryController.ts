import { Request,Response, NextFunction } from "express";
import { CoreApiResponse } from '@/types';
import { CategoryService } from "@/nutrition/services";

export class CategoryController {

  static async getCategoryById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    try {
      const category = await CategoryService.getCategoryById(id);

      const response: CoreApiResponse = { 
        msg: '[Nutrition] Category Fetched Succesfully', 
        payload: { category }, 
        error: null 
      };

      res.json(response);
    } 
    catch(error) {
      next(error);
    }
  }


  static async updateCategoryById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const { title, color } = req.body;

    try {
      const category = await CategoryService.updateCategoryById(id, { title, color });

      const response: CoreApiResponse = {
        msg: '[Nutrition] Category Updated Successfully', 
        payload: { category }, 
        error: null 
      };

      res.json(response);
    } 
    catch(error) {
      next(error);
    }
  }


  static async deleteCategoryById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    try {
      const category = await CategoryService.deleteCategoryById(id);

      const response: CoreApiResponse = {
        msg: '[Nutrition] Category Deleted Successfully', 
        payload: { category }, 
        error: null 
      };

      res.json(response);
    } 
    catch(error) {
      next(error);
    }
  }


  static async createCategory(req: Request, res: Response, next: NextFunction) {
    const { title, color } = req.body;

    try {
      const category = await CategoryService.createCategory({ title, color });

      const response: CoreApiResponse = {
        msg: '[Nutrition] Category Created Successfully', 
        payload: { category }, 
        error: null 
      };

      res.status(201).json(response);
    } 
    catch(error) {
      next(error);
    }
  }


  static async getAllCategories(req: Request, res: Response, next: NextFunction) {
    try {
      const categories = await CategoryService.getCategories();

      const response: CoreApiResponse = { 
        msg: '[Nutrition] Categories Fetched Succesfully', 
        payload: { categories }, 
        error: null 
      };

      res.json(response);
    } 
    catch(error) {
      next(error);
    }
  }
}