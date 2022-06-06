import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma/prisma.service';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { Gender } from './entities/gender.entity';

@Injectable()
export class GendersService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Gender[]> {
    return this.prisma.genders.findMany();
  }

  async findById(id: string): Promise<Gender> {
    const records = await this.prisma.genders.findUnique({ where: { id } });
    if (!records) {
      throw new NotFoundException(`Perfil com ID ${id} não localizado!`)
    }
    return records;
  }

  findOne(id: string): Promise<Gender> {
    return this.findById(id);
  }

  async create(dto: CreateGenderDto): Promise<Gender> {
    const data: Gender = { ...dto };
    try {
      return await this.prisma.genders.create({ data });
    } catch (err) {
      return this.handleError(err);
    }
  }

  async update(id: string, dto: UpdateGenderDto): Promise<Gender> {
    await this.findById(id);
    const data: Partial<Gender> = { ...dto };

    return this.prisma.genders.update({
      where: { id },
      data
    }).catch(this.handleError);
  }

  async delete(id: string) {
    await this.findById(id);
    await this.prisma.genders.delete({ where: { id }});
  }

  handleError(err: Error): undefined {
    throw new UnprocessableEntityException(err.message)
  }
}
