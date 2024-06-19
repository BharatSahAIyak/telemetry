import { ApiProperty } from "@nestjs/swagger";

export class CreateMVDto {
    @ApiProperty()
    sqlQuery: string
}