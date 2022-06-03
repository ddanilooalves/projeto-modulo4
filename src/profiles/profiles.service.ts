import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfilesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Profile[]> {
    return this.prisma.profile.findMany();
  }

  async findById(id: string): Promise<Profile> {
    const records = await this.prisma.profile.findUnique({ where: { id } });
    if (!records) {
      throw new NotFoundException(`Perfil com ID ${id} não localizado!`)
    }
    return records;
  }

  findOne(id: string): Promise<Profile> {
    return this.findById(id);
  }

  async create(dto: CreateProfileDto): Promise<Profile> {
    const data: Profile = { ...dto };
    try {
      return await this.prisma.profile.create({ data });
    } catch (err) {
      return this.handleError(err);
    }
  }

  async update(id: string, dto: UpdateProfileDto): Promise<Profile> {
    await this.findById(id);
    const data: Partial<Profile> = { ...dto };

    return this.prisma.profile.update({
      where: { id },
      data
    }).catch(this.handleError);
  }

  async delete(id: string) {
    await this.findById(id);
    await this.prisma.profile.delete({ where: { id }});
  }

  handleError(err: Error): undefined {
    throw new UnprocessableEntityException(err.message)
  }
}
