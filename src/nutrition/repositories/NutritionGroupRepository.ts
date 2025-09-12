import { Types } from 'mongoose';
import { NutritionGroupModel } from "@/nutrition/models";

export interface CreateGroupPayload {
  title: string;
}

export interface UpdateGroupPayload {
  title: string;
}

export class NutritionGroupRepository {

  static async getGroups() {
    return NutritionGroupModel.find();
  }

  static async getGroupByTitle(title: string) {
    return NutritionGroupModel.findOne({ title });
  }

  static async getGroupById(id: Types.ObjectId) {
    return NutritionGroupModel.findById(id)
  }

  static async createGroup(payload: CreateGroupPayload) {
    const { title } = payload;
    const group = await NutritionGroupRepository.getGroupByTitle(title);

    if(group) {
      throw new Error('Group already exists');
    }

    return NutritionGroupModel.create(payload);
  }

  static async updateGroupById(id: Types.ObjectId, payload: CreateGroupPayload) {
    const group = await NutritionGroupRepository.getGroupById(id);

    if(!group) {
      throw new Error('Group doesn\'t exists');
    }

    return NutritionGroupModel.findByIdAndUpdate(id, payload, { new: true });
  }

  static async deleteGroupById(id: Types.ObjectId) {
    const group = await NutritionGroupRepository.getGroupById(id);

    if(!group) {
      throw new Error('Group doesn\'t exists');
    }

    await NutritionGroupModel.findByIdAndDelete(id);
    return group;
  }
}