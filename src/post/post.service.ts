import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async create(createPostInput: CreatePostInput) {
    return this.prisma.post.create({ data: createPostInput });
  }

  async findAll() {
    return this.prisma.post.findMany({ orderBy: { id: 'desc' } });
  }

  async findOne(id: number) {
    return this.prisma.post.findFirst({ where: { id: id } });
  }

  async update(id: number, updatePostInput: UpdatePostInput) {
    return this.prisma.post.update({
      data: updatePostInput,
      where: {
        id: id,
      },
    });
  }

  async remove(id: number) {
    this.prisma.post.delete({ where: { id: id } });
  }
}
