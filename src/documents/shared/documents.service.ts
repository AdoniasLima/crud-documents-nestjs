import { Injectable } from '@nestjs/common';
import { Document } from './document';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectModel('Document') private readonly documentModel: Model<Document>,
  ) {}

  async getAll() {
    return await this.documentModel.find().exec();
  }

  async getById(id: string) {
    return await this.documentModel.findById(id).exec();
  }

  async create(document: Document) {
    const createDocument = new this.documentModel(document);
    return await createDocument.save();
  }

  async update(id: string, document: Document) {
    await this.documentModel.updateOne({ _id: id }, document);
    return this.getById(id);
  }

  async delete(id: string) {
    return await this.documentModel.deleteOne({ _id: id }).exec();
  }
}
