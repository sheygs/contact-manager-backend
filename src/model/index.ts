import { ObjectLiteral } from '../interfaces';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';

class UniversalModel {
  private resource: Repository<any>;

  constructor(entity: any) {
    this.resource = entity;
  }

  async insert(queryParams: ObjectLiteral): Promise<any> {
    try {
      const newRecord = this.resource.create(queryParams);

      await newRecord.save();

      return newRecord;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, options: ObjectLiteral): Promise<any> {
    try {
      const response = await this.resource.update(id, options);

      return response;
    } catch (error) {
      throw error;
    }
  }

  async findOne(options: FindOneOptions<ObjectLiteral>): Promise<any> {
    try {
      const record = await this.resource.findOne(options);
      return record;
    } catch (error) {
      throw error;
    }
  }

  async findAll(conditions: FindManyOptions<ObjectLiteral>): Promise<any[]> {
    try {
      const records = await this.resource.find(conditions);
      return records;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string): Promise<void> {
    try {
      await this.resource.delete(id);
    } catch (error) {
      throw error;
    }
  }
}

export default UniversalModel;
