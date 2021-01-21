import * as mongoose from 'mongoose';

export class Document extends mongoose.Document {
  description: string;
}
