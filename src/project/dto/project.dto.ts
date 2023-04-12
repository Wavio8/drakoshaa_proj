import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ProjectDto {
  @ApiProperty({
    description: 'name',
    example: 'Java Development',
  })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    description: 'link',
    example: 'Dino/java',
  })
  @IsNotEmpty()
  readonly link: string;

  @ApiProperty({
    description: 'friendId',
    example: '1',
  })
  @IsNotEmpty()
  readonly friendId: number;
}
