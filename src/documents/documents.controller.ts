import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Document } from './shared/document';
import { DocumentsService } from './shared/documents.service';

@Controller('documents')
export class DocumentsController {
  constructor(private documentService: DocumentsService) {}

  @Get()
  async getAll(): Promise<Document[]> {
    return this.documentService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Document> {
    return this.documentService.getById(id);
  }

  @Post()
  async create(@Body() document: Document): Promise<Document> {
    return this.documentService.create(document);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() document: Document,
  ): Promise<Document> {
    document.id = id;
    return this.documentService.update(id, document);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.documentService.delete(id);
  }
}
