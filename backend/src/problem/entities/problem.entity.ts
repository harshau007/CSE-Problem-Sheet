import { ApiProperty } from "@nestjs/swagger";
import { Problem } from "@prisma/client";

export class ProblemEntity implements Problem {
    @ApiProperty()
    id: number;
    @ApiProperty()
    title: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    url: string;
    @ApiProperty()
    createdAt: Date;
    @ApiProperty()
    updatedAt: Date;
}
