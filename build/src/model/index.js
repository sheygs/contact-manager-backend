"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UniversalModel {
    resource;
    constructor(entity) {
        this.resource = entity;
    }
    async insert(queryParams) {
        try {
            const newRecord = this.resource.create(queryParams);
            await newRecord.save();
            return newRecord;
        }
        catch (error) {
            throw error;
        }
    }
    async update(id, options) {
        try {
            const response = await this.resource.update(id, options);
            return response;
        }
        catch (error) {
            throw error;
        }
    }
    async findOne(options) {
        try {
            const record = await this.resource.findOne(options);
            return record;
        }
        catch (error) {
            throw error;
        }
    }
    async findAll(conditions) {
        try {
            const records = await this.resource.find(conditions);
            return records;
        }
        catch (error) {
            throw error;
        }
    }
    async remove(id) {
        try {
            await this.resource.delete(id);
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = UniversalModel;
//# sourceMappingURL=index.js.map