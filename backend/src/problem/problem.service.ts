import { Injectable } from '@nestjs/common';
import { CreateProblemDto } from './dto/create-problem.dto';
import { UpdateProblemDto } from './dto/update-problem.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProblemService {
  constructor(private prisma: PrismaService ) {}

  create(createProblemDto: CreateProblemDto) {
    return this.prisma.problem.create({ data : createProblemDto});
  }

  findAll() {
    return this.prisma.problem.findMany();
  }

  async findOne(id: number) {
    return this.prisma.problem.findUnique({ where : { id }});
  }

  update(id: number, updateProblemDto: UpdateProblemDto) {
    return this.prisma.problem.update({
      where: { id },
      data: updateProblemDto,
    });
  }

  remove(id: number) {
    return this.prisma.problem.delete({
      where: {id},
    });
  }
}
