import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class PostDto {
  @ApiProperty({
    description: 'title',
    example: 'Good help',
  })
  @IsNotEmpty()
  readonly title: string;

  @ApiProperty({
    description: 'content',
    example: 'Some text',
  })
  readonly content: string;

  @ApiProperty({
    description: 'authorId',
    example: '1',
  })
  readonly authorId: number;
}
