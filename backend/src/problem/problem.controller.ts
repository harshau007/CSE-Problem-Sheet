import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { ProblemService } from './problem.service';
import { CreateProblemDto } from './dto/create-problem.dto';
import { UpdateProblemDto } from './dto/update-problem.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { ProblemEntity } from './entities/problem.entity';

@Controller('problem')
@ApiTags('Problems')
export class ProblemController {
  constructor(private readonly problemService: ProblemService) {}

  @Post()
  @ApiCreatedResponse({ type: ProblemEntity })
  create(@Body() createProblemDto: CreateProblemDto) {
    return this.problemService.create(createProblemDto);
  }

  @Get()
  @ApiCreatedResponse({ type: ProblemEntity, isArray: true})
  findAll() {
    return this.problemService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: ProblemEntity, isArray: true })
  async findOne(@Param('id') id: string) {
    const problem = await this.problemService.findOne(+id);

    if (!problem) {
      throw new NotFoundException(`Problem with id:${id} not found`);
    }

    return problem;
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: ProblemEntity })
  update(@Param('id') id: string, @Body() updateProblemDto: UpdateProblemDto) {
    return this.problemService.update(+id, updateProblemDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: ProblemEntity })
  remove(@Param('id') id: string) {
    return this.problemService.remove(+id);
  }
}
