import { Request,Response, NextFunction } from "express";
import { CoreApiResponse } from '@/types';
import { ItemService } from "@/nutrition/services";

export class ItemController {

  static async getItemById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    try {
      const item = await ItemService.getItemById(id);

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
      const item = await ItemService.updateItemById(id, { title, category });

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
      const item = await ItemService.deleteItemById(id);

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
    const { body } = req;

    try {
      const item = await ItemService.createItem(body);

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
    const { category, orderBy, orderDir } = req.query;
    
    // filter
    const filter = category ? { category }: {}
    // projection
    const projection = ['title', 'calories', 'proteins', 'updatedAt'];
    // sort
    const order = orderBy ? orderBy.toLocaleString():'title';
    const dir = orderDir ? parseInt(orderDir.toLocaleString()):1
    const sort: any = {};
    sort[order] = dir;

    try {
      const items = await ItemService.getItems({ 
        filter,
        projection,
        sort
      });

      const response: CoreApiResponse = { 
        msg: '[Nutrition] Items Fetched Succesfully', 
        payload: { 
          items,
          len: items.length
        }, 
        error: null 
      };

      res.json(response);
    } 
    catch(error) {
      next(error);
    }
  }
}