import { ApiProperty } from "@nestjs/swagger";

export class CreateProblemDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    url: string;
}
