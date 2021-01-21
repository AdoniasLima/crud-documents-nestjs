import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { DocumentsController } from './documents.controller';
import { DocumentsService } from './shared/documents.service';

import { DocumentSchema } from './schemas/document.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Document', schema: DocumentSchema }]),
  ],
  controllers: [DocumentsController],
  providers: [DocumentsService],
})
export class DocumentsModule {}
