import { Module } from '@nestjs/common';
import { ProblemService } from './problem.service';
import { ProblemController } from './problem.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ProblemController],
  providers: [ProblemService],
  imports: [PrismaModule]
})
export class ProblemModule {}
