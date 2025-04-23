import { Request,Response, NextFunction } from "express";
import { CoreApiResponse } from '@/types';
import { NutritionItemService } from "@/nutrition/services";

export class NutritionItemController {

  static async getItemById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    try {
      const item = await NutritionItemService.getItemById(id);

      const response: CoreApiResponse = { 
        msg: '[Nutrition] Item Fetched Succesfully', 
        payload: { item }, 
        error: null 
      };

      res.json(response);
    } 
    catch(error) {
      next(error);
    }
  }


  static async updateItemById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const { title, category } = req.body;

    try {
      const item = await NutritionItemService.updateItemById(id, { title, category });

      const response: CoreApiResponse = {
        msg: '[Nutrition] Item Updated Successfully', 
        payload: { item }, 
        error: null 
      };

      res.json(response);
    } 
    catch(error) {
      next(error);
    }
  }


  static async deleteItemById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    try {
      const item = await NutritionItemService.deleteItemById(id);

      const response: CoreApiResponse = {
        msg: '[Nutrition] Item Deleted Successfully', 
        payload: { item }, 
        error: null 
      };

      res.json(response);
    } 
    catch(error) {
      next(error);
    }
  }


  static async createItem(req: Request, res: Response, next: NextFunction) {
    const { title, category } = req.body;

    try {
      const item = await NutritionItemService.createItem({ title, category });

      const response: CoreApiResponse = {
        msg: '[Nutrition] Item Created Successfully', 
        payload: { item }, 
        error: null 
      };

      res.status(201).json(response);
    } 
    catch(error) {
      next(error);
    }
  }


  static async getAllItems(req: Request, res: Response, next: NextFunction) {
    try {
      const items = await NutritionItemService.getItems();

      const response: CoreApiResponse = { 
        msg: '[Nutrition] Items Fetched Succesfully', 
        payload: { items }, 
        error: null 
      };

      res.json(response);
    } 
    catch(error) {
      next(error);
    }
  }
}